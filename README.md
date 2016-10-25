## Riot-Seed with riot-router

### Features:
- routing (via riot-router)
- stores
- dispatcher (to implement flux actions/1D data-flow)
- nested components with actions and updates
- login example

### Utilising:
- riot-router
- Yarn (for package management instead of NPM)
- Webpack
- ES6 (Babel)
- SASS
- AVA (testing)
- StandardJS (linting)

### How to run
```
$ git clone https://github.com/continuata/riot-seed.git
$ cd riot-seed
$ yarn --ignore-engines
$ mkdir public
$ yarn dev
```

### How to run the tests
```
$ yarn test
```

### How to build production
```
$ yarn build
```
