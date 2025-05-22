install:
	npm ci
	
publish:
	npm publish --dry-run

lint:
	npx eslint --fix .

link:
	npm link

brain-games:
	chmod +x ./bin/brain-games.js

brain-even:
	chmod +x ./bin/brain-even.js

brain-calc:
	chmod +x ./bin/brain-calc.js

brain-gcd:
	chmod +x ./bin/brain-gcd.js
	
brain-progression:
	chmod +x ./bin/brain-progression.js

brain-prime:
	chmod +x ./bin/brain-prime.js
