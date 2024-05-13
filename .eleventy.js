const filters = require('./utils/filters.js')
const transforms = require('./utils/transforms.js')

// 11ty configuration
const
  dev = global.dev = (process.env.ELEVENTY_ENV === 'development'),
  now = new Date();

module.exports = function (eleventyConfig) {

  // watch targets for build pipeline
  eleventyConfig.addWatchTarget("./src/assets/sass/");
  eleventyConfig.addWatchTarget('./src/js/');

  // LIBRARIES and PLUGINS
  let markdownIt = require("markdown-it");
  let options = {
    html: true,
    breaks: true,
    linkify: true
  };
  
  // eleventyConfig.setLibrary("md", markdownIt(options));
  let markdownLib = markdownIt(options);
  eleventyConfig.setLibrary("md", markdownLib);
  
  // let markdownItEmoji = require("markdown-it-emoji");
  // eleventyConfig.amendLibrary("md", (markdownLib) => markdownLib.use(markdownItEmoji)); // ERROR !! plugin.apply is not a function !!

  // STATIC PASSTHROUGHS

  // eleventyConfig.addPassthroughCopy("./src/assets/fonts/");
  // eleventyConfig.addPassthroughCopy("./src/assets/img/");
  /**
      if no assets pipeline or build tools, we 
      could pass through the entire asset folder :

      // eleventyConfig.addPassthroughCopy("./src/assets/");
  */

  // FILTERS
  Object.keys(filters).forEach((filterName) => {
    eleventyConfig.addFilter(filterName, filters[filterName])
  })

  // TRANSFORMS
  // Object.keys(transforms).forEach((transformName) => {
  //   eleventyConfig.addTransform(transformName, transforms[transformName])
  // })

  /** 
   * add Collections 
   **/


  /** 
   * additional settings here
   **/

  /** 
   * Browsersync settings
   **/

  eleventyConfig.setBrowserSyncConfig({
    notify: false,
    startPath: "/"
  });

  return {
    dir: {
      input: "src",
      output: "public"
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["njk", "md", "11ty.js"]
  }
}