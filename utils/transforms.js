const htmlmin = require('html-minifier')

module.exports = {
  htmlmin: function (content, outputPath) {
    return htmlmin.minify(content, {
      useShortDoctype: true,
      removeComments: true,
      collapseWhitespace: true
    })
    return content
  },
}