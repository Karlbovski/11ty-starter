const dayjs = require('dayjs');
// 11ty configuration
const
  dev = global.dev  = (process.env.ELEVENTY_ENV === 'development'),
  now = new Date();

module.exports = function (eleventyConfig) {

    //** build pipeline */
    eleventyConfig.addWatchTarget("./src/assets/sass/");
    eleventyConfig.addWatchTarget('./src/js/');

    //** libraries and plugins */
    let markdownIt = require("markdown-it");
    let markdownItEmoji = require("markdown-it-emoji");
    let options = {
      html: true,
      breaks: true,
      linkify: true
    };
    
    let markdownLib = markdownIt(options).use(markdownItEmoji);
    eleventyConfig.setLibrary("md", markdownLib);
    
    //** static passthroughs */ 
    
    // eleventyConfig.addPassthroughCopy("./src/assets/fonts/");
    // eleventyConfig.addPassthroughCopy("./src/assets/img/");
    /**
        if no assets pipeline or build tools, we 
        could pass through the entire asset folder :

        // eleventyConfig.addPassthroughCopy("./src/assets/");
    */

    //** Add filters to Nunjucks */
    eleventyConfig.addFilter("kebab", require("./src/_filters/kebab.js") );

    eleventyConfig.addNunjucksFilter("date", function (date, format, locale) {
      locale = locale ? locale : "en";
      return dayjs(date).locale(locale).format(format);
    });
    //** Assemble some collections */ 

    // eleventyConfig.addCollection("tagList", require("./src/site/_filters/getTagList.js"));
    // eleventyConfig.addCollection("posts", function(collection) {
    // return collection.getFilteredByGlob("src/site/blog/*.md").reverse();
    // });

      eleventyConfig.addCollection("content_en", function (collection) {
        return collection.getFilteredByGlob("./src/en/content/*.md");
      });
  

    //** additional settings here */

    // Browsersync settings 
    eleventyConfig.setBrowserSyncConfig({
      notify: false,
      startPath: "/en/"
    });

    return {
        dir: {
            input: "src",
            output: "public"
        },
        htmlTemplateEngine : "njk",
        markdownTemplateEngine : "njk",
        templateFormats : ["njk", "md", "11ty.js"]
    }
}