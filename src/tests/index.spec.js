const pluginTester = require('babel-plugin-tester').default
const { name } = require('../../package.json')

const plugin = require('..')

const path = require('path')

pluginTester({
  plugin,
  fixtures: path.join(__dirname, 'fixtures'),
  pluginName: name,
  snapshot: true
})
