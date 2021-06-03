const dayjs = require('dayjs');

module.exports = {
  dateToFormat: function (date, format, locale) {
    locale = locale ? locale : "en";
    return dayjs(date).locale(locale).format(format);
  },
  excerpt: function (post) {
    const content = post.replace(/(<([^>]+)>)/gi, "");
    return content.substr(0, content.lastIndexOf(" ", 200)) + "...";
  },
  //replace dots and slashes with dashes
  kebab: function (text) {
    let re = /\/|\./gi;
    return text.replace(re, '-')
  }
}