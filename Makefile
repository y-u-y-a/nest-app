include .env

.PHONY: up dev test e2e
init:
	yarn global add dotenv-cli
	cp .env.example .env
up:
	rm -rf node_modules dist
	yarn install
dev:
	yarn start:dev
test:
	yarn lint && yarn test
e2e:
	yarn test:e2e

freee:
	curl -i -X POST \
	-H "Content-Type:application/x-www-form-urlencoded" \
	-d "grant_type=authorization_code" \
	-d "client_id=$(FREEE_CLIENT_ID)" \
	-d "client_secret=$(FREEE_CLIENT_SECRET)" \
	-d "code=$(FREEE_AUTH_CODE)" \
	-d "redirect_uri=$(FREEE_REDIRECT_URI)" \
	https://accounts.secure.freee.co.jp/public_api/token