import { minify } from 'html-minifier';

export default function (content, outputPath) {
  
  /**
   * Eleventy 1.0+: use this.inputPath and this.outputPath instead
   */
  if (outputPath && outputPath.endsWith(".html")) {
    let minified = minify(content, {
      useShortDoctype: true,
      removeComments: true,
      collapseWhitespace: true,
    })
    return minified
  }

  return content
}
