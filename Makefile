install:
	npm ci

brain-games:
	chmod +x ./bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint --fix .

link:
	npm link

brain-even:
	chmod +x ./bin/brain-even.js

