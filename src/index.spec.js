const path = require('path');
const pluginTester = require('babel-plugin-tester/pure').default;

const { name } = require('../package.json');

const plugin = require('.');

pluginTester({
  plugin,
  snapshot: true,
  fixtures: path.join(__dirname, 'fixtures'),
  pluginName: name,
});
