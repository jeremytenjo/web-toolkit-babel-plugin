const { writeFile } = require('fs');
const babel = require('@babel/core');
const t = require('@babel/types');
const jsxPlugin = require('@babel/plugin-transform-react-jsx');

const input = require('./fixtures/icon/code');

const output = babel.transformSync(input, {
  plugins: [
    jsxPlugin,
    function handleIcons() {
      return {
        visitor: {
          ImportDeclaration(path, state) {
            if (path.node.source.value !== '@tenjojeremy/web-toolkit/dataDisplay/icon')
              return;

            // remove Icon import
            path.remove();
            // get icon name
            // remove icon name="" text
            // add icon import
            // path.node.source.value = '';
            // path.node.specifiers = '';
          },
        },
      };
    },
  ],
});

writeFile('output.js', output.code, function (err) {
  if (err) throw err;
});
// console.log(output.code);
