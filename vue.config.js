module.exports = {
  configureWebpack: {
    output: {
      libraryExport: 'default'
    },
    externals: {
      marked: 'marked',
      'highlight.js': 'highlight.js'
    }
  }
}
