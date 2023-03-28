import { Logging } from '@google-cloud/logging'
import { HttpService } from '@nestjs/axios'
import { Body, Controller, Get, Post } from '@nestjs/common'
import admin from 'firebase-admin'

@Controller('test')
export class TestController {
  constructor(private readonly httpService: HttpService) {}
  @Get('logging')
  async get(): Promise<string> {
    const logName = 'test-log'
    const logging = new Logging({ projectId: 'yuya-dev' })

    // Selects the log to write to
    const log = logging.log(logName)

    // The metadata associated with the entry
    // Prepares a log entry
    const entry = log.entry(
      {
        resource: { type: 'global' },
        // See: https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#logseverity
        severity: 'ERROR',
      },
      'Error!!!!!!',
    )
    // Writes the log entry
    await log.write(entry)
    return 'Success!'
  }

  /** Import users into Identity platform */
  @Post('idp')
  async post(@Body() body: { tenantId: string }): Promise<void> {
    try {
      admin.initializeApp({
        credential: admin.credential.cert('.secret/gcp-service-account.json'),
      })
      const tenantAuth = admin.auth().tenantManager().authForTenant(body.tenantId)
      /**
       * NOTE:https://cloud.google.com/identity-platform/docs/migrating-users?hl=ja
       * 高速処理を目的として最適化されているため、フィールドの重複は確認されません。既存の uid と競合するユーザーをインポートすると、既存のユーザーが置き換えられます。他のいずれかのフィールドが重複している（たとえば、email）ユーザーをインポートすると、同じ値を持つ追加のユーザーになります。
       */
      await tenantAuth.importUsers(
        [
          {
            // 同じメールアドレスでもuidが異なれば別レコードとして登録される(複数emailの登録ができる)
            uid: 'xxx-1', // 必須: 登録する際にuidの指定(取得)が必要？
            email: 'test@email.com', // 任意: 同じuidだと置換(更新)される
            passwordHash: Buffer.from('password-hash'), // 任意: パスワードなしでも登録できる
          },
          {
            uid: 'xxx-2',
            email: 'test@email.com',
            passwordHash: Buffer.from('password-hash'),
          },
          {
            uid: 'xxx-3',
            phoneNumber: '+11234567890',
            email: 'johndoe@acme.com',
            customClaims: { admin: true },
            providerData: [
              {
                uid: 'saml-uid',
                email: 'johndoe@acme.com',
                displayName: 'John Doe',
                photoURL: 'http://www.example.com/12345678/photo.png',
                providerId: 'saml.acme',
              },
            ],
          },
        ],
        { hash: { algorithm: 'BCRYPT' } },
      )
    } catch (error) {
      console.log(error)
    }
  }
}
