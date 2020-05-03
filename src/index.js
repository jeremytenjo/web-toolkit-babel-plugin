module.exports = ({ types: t }) => {
  return {
    visitor: {
      ImportDeclaration(path) {
        console.log(path.node.source.value);
        if (path.node.source.value !== '@tenjojeremy/web-toolkit/dataDisplay/icon')
          return;
        path.remove();
      },
    },
  };
};
