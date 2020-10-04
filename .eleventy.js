module.exports = function (eleventyConfig) {

    eleventyConfig.addWatchTarget("./src/sass/");
    eleventyConfig.addPassthroughCopy("./src/css");

    //** code here */

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}