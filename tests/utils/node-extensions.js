const babel = require('babel-core')
const fs = require('fs')
const path = require('path')
const riot = require('riot')

// Add riot to node env so compilation works - per https://github.com/riot/riot/issues/895
global.riot = riot

function getBabelRc () {
  try {
    const contents = fs.readFileSync(path.join('..', '..', '.babelrc'), 'utf8')
    return JSON.parse(contents)
  } catch (e) {
    console.log('Error loading .babelrc', e)
    return {}
  }
}

// override behavior for riot tag import - per https://github.com/mochajs/mocha/issues/1458
require.extensions['.tag'] = function (module, filename) {
  const content = fs.readFileSync(filename, 'utf8')
  const riotCompiled = riot.compile(content, { type: 'babel' })
  const babelCompiled = babel.transform(riotCompiled, getBabelRc())
  return module._compile(babelCompiled.code, filename)
}
