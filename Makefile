include .env

.PHONY: up dev test e2e
up:
	rm -rf node_modules dist
	pnpm install
test:
	pnpm lint && pnpm test
e2e:
	pnpm test:e2e