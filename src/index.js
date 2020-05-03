const { writeFile } = require('fs');
const babel = require('@babel/core');
const jsxPlugin = require('@babel/plugin-transform-react-jsx');

const input = require('./fixtures/icon/code');

const output = babel.transformSync(input, {
  plugins: [
    jsxPlugin,
    function handleIcons() {
      return {
        visitor: {
          ImportDeclaration(path, state) {
            console.log({ hello: path.node.specifiers[0].local.name });
            // console.log(path.node.source.value);
            if (path.node.source.value !== '@tenjojeremy/web-toolkit/dataDisplay/icon')
              return;
            path.node.source.value = '@tenjojeremy/web-toolkit/dataDisplay/icons/';
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
