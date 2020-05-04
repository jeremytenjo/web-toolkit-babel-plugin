const { writeFile } = require('fs');
const babel = require('@babel/core');
const jsxPlugin = require('@babel/plugin-transform-react-jsx');

const uppercaseFirstLetter = require('./utils/uppercaseFirstLetter');
const input = require('./test/code');

const output = babel.transformSync(input, {
  plugins: [
    jsxPlugin,
    function handleIcons({ types: t, template }) {
      let root;
      let importedIcons = [];
      return {
        visitor: {
          Program(path) {
            root = path;
          },
          ImportDeclaration(path) {
            if (path.node.source.value !== '@tenjojeremy/web-toolkit/dataDisplay/icon')
              return;
            // remove import Icon from '@tenjojeremy/web-toolkit/dataDisplay/icon';
            path.remove();
          },
          JSXElement(path) {
            const element = path.node.openingElement;
            if (element.name.name !== 'Icon') return;
            // add icon import using <Icon name="book"/> name property
            const iconName = element.attributes.find((i) => i.name.name === 'name').value
              .value;
            const wasImpored = importedIcons.some((i) => i === iconName);
            if (wasImpored) return;
            const iconNameDeclarator = uppercaseFirstLetter(iconName.split('/').join(''));
            const buildImport = template(`
import ${iconNameDeclarator} from '@tenjojeremy/web-toolkit/dataDisplay/icons/${iconName}';
`);
            const importDeclaration = buildImport();

            root.unshiftContainer('body', importDeclaration);
            importedIcons.push(iconName);
          },
        },
      };
    },
  ],
});

writeFile('src/test/testOutput.js', output.code, function (err) {
  if (err) throw err;
});
// console.log(output.code);
