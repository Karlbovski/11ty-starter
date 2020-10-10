---
layout: "layouts/page.njk"
---

<h1>Hallo
<code>index.njk</code>Template</h1>
<button id="themetoggle">toggle theme</button>

The `index.njk`  layout should be used for index pages.

It has some logics to handle multilanguage sites.

It will check if the `locale` property is present and sets the front-matter `permalink` property accordingly.

### Current permalink : 

`"{% if locale %}{{ locale }}/{% endif %}index.html"`

This means that if the `locale` prop is set, this page will end in its own path

`permalink: "locale/index.html"`

otherwise will be placed in the root of the site

`permalink: "index.html"`


