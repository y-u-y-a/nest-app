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