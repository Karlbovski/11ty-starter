const filters = require('./utils/filters.js')

// 11ty configuration
const
  dev = global.dev = (process.env.ELEVENTY_ENV === 'development'),
  now = new Date();

module.exports = function (eleventyConfig) {

  /** 
   * watch for build pipeline
   **/
  eleventyConfig.addWatchTarget("./src/assets/sass/");
  eleventyConfig.addWatchTarget('./src/js/');

  /** 
   * LIBRARIES and PLUGINS 
   **/
  let markdownIt = require("markdown-it");
  let markdownItEmoji = require("markdown-it-emoji");
  let options = {
    html: true,
    breaks: true,
    linkify: true
  };

  let markdownLib = markdownIt(options).use(markdownItEmoji);
  eleventyConfig.setLibrary("md", markdownLib);

  /**
   * Static passthroughs
   **/

  // eleventyConfig.addPassthroughCopy("./src/assets/fonts/");
  // eleventyConfig.addPassthroughCopy("./src/assets/img/");
  /**
      if no assets pipeline or build tools, we 
      could pass through the entire asset folder :

      // eleventyConfig.addPassthroughCopy("./src/assets/");
  */

  // Filters
  Object.keys(filters).forEach((filterName) => {
    eleventyConfig.addFilter(filterName, filters[filterName])
  })

  // Collections

  // eleventyConfig.addCollection("tagList", require("./src/site/_filters/getTagList.js"));
  // eleventyConfig.addCollection("posts", function(collection) {
  // return collection.getFilteredByGlob("src/site/blog/*.md").reverse();
  // });

  // example english content
  // eleventyConfig.addCollection("content_en", function (collection) {
  //   return collection.getFilteredByGlob("./src/content/en/*//*.md");
  // });


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