// 11ty configuration
const
  dev = global.dev  = (process.env.ELEVENTY_ENV === 'development'),
  now = new Date();

module.exports = function (eleventyConfig) {

    //  build pipeline
    eleventyConfig.addWatchTarget("./src/assets/sass/");
    eleventyConfig.addWatchTarget('./src/assets/js/');

    // plugins
    
    // static passthroughs
    // eleventyConfig.addPassthroughCopy("./src/assets/fonts/");
    // eleventyConfig.addPassthroughCopy("./src/assets/img/");
    /**
        if no assets pipeline or build tools, we 
        could pass through the entire asset folder :

        // eleventyConfig.addPassthroughCopy("./src/assets/");
    */

    // Add filters to Nunjucks
    eleventyConfig.addFilter("kebab", require("./src/_filters/kebab.js") );

    // Assemble some collections
    // eleventyConfig.addCollection("tagList", require("./src/site/_filters/getTagList.js"));
    // eleventyConfig.addCollection("posts", function(collection) {
    // return collection.getFilteredByGlob("src/site/blog/*.md").reverse();
    // });

    //** code here */

    return {
        dir: {
            input: "src",
            output: "public"
        },
        templateFormats : ["njk", "md"],
        htmlTemplateEngine : "njk",
        markdownTemplateEngine : "njk",
    }
}