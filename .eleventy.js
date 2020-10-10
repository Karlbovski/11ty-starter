// 11ty configuration
const
  dev = global.dev  = (process.env.ELEVENTY_ENV === 'development'),
  now = new Date();

module.exports = function (eleventyConfig) {

    eleventyConfig.addWatchTarget("./src/assets/sass/");
    eleventyConfig.addWatchTarget('./src/assets/js/modules/');

    // copy files
    // eleventyConfig.addPassthroughCopy("./src/assets/fonts/");
    // eleventyConfig.addPassthroughCopy("./src/assets/img/");

    // if no assets pipeline or build tools */
    // eleventyConfig.addPassthroughCopy("./src/assets/");

    //** code here */

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}