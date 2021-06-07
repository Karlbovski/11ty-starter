const dayjs = require('dayjs');

module.exports = {
  dateToFormat: function (date, format, locale) {
    locale = locale ? locale : "en";
    return dayjs(date).locale(locale).format(format);
  },
  //generate an excerpt from text of N characters (200=default)
  excerpt: function (post) {
    const content = post.replace(/(<([^>]+)>)/gi, "");
    return content.substr(0, content.lastIndexOf(" ", 200)) + "...";
  },
  //replace dots and slashes with dashes
  kebab: function (text) {
    let re = /\/|\./gi;
    return text.replace(re, '-')
  },
  //compress and combine js files
  jsmin: function (code) {
    const UglifyJS = require("uglify-js");
    let minified = UglifyJS.minify(code);
    if (minified.error) {
      console.log("UglifyJS error: ", minified.error);
      return code;
    }
    return minified.code;
  },
  //make a search index string by removing duplicated words and removing less useful, common short words
  squash: function (text) {
    let content = new String(text);

    // all lower case, please
    content = content.toLowerCase();

    // remove all html elements and new lines
    let re = /(&lt;.*?&gt;)|(<.*?>)/gi;
    let plain = unescape(content.replace(re, ''));

    // remove duplicated words
    let words = plain.split(' ');
    let deduped = [...(new Set(words))];
    let dedupedStr = deduped.join(' ')

    // remove short and less meaningful words
    let result = dedupedStr.replace(/\b(\.|\,|the|a|an|and|am|you|I|to|if|of|off|me|my|on|in|it|is|at|as|we|do|be|has|but|was|so|no|not|or|up|for)\b/gi, '');
    //remove newlines, and punctuation
    result = result.replace(/\.|\,|\?|-|—|\n/g, '');
    //remove repeated spaces
    result = result.replace(/([ ]{2,}|\t+)/g, ' ');

    return result;
  }
}