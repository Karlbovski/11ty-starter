---
layout: "layouts/page.njk"
---

<h1>Hallo from <code>{{layout}}</code> Template</h1>
<button id="themetoggle">toggle theme</button>
<br/>
<br/>

We could use the additional template `index.njk`

The `index.njk` layout should be used for index pages. It contains some logics to handle multilanguage sites. 

It will check if the `locale` property is present and sets the front-matter `permalink` property accordingly.

### Current permalink : 

`"{% if locale %}{{ locale }}/{% endif %}index.html"`

This means that if the `locale` prop is set and we are usign the `index.njk` layout, 

this page will end in its own path :

`permalink: "locale/index.html"`

otherwise it will be placed in the root of the site (default)

`permalink: "index.html"`


