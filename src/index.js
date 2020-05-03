module.exports = ({ types: t }) => {
  return {
    visitor: {
      ImportDeclaration(path) {
        if (path.node.source.value !== 'use-css') return
        path.remove()
      }
    }
  }
}
