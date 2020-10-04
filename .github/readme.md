# 11ty starter  
## `v1.0.0`

### Usage
<br/>

``` 
- clone the repo
- rename working folder
- remove git remote
- npm install
- npm outdated
- npm audit
```
<br/>

The starter includes just a few lines in the`.eleventy.js` config file to setup the `sass` building pipeline and base site directories:

```js
module.exports = function (eleventyConfig) {

    eleventyConfig.addWatchTarget("./src/sass/");
    eleventyConfig.addPassthroughCopy("./src/css");

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}
``` 
<br/>

### Start here
- [11ty Docs](https://www.11ty.dev/docs/)