# Makefile
setup: env-prepare sqlite-prepare install key db-prepare # можно ссылаться на цели, описанные ниже

env-prepare:
	cp -n .env.example .env

sqlite-prepare:
	touch database/database.sqlite

install:
	composer install
	npm install

key:
	php artisan key:generate

db-prepare:
	php artisan migrate --seed

start:
	heroku local -f Procfile.dev

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

