---
metaTitle: Home
metaDescription: Meta description in front matter
layout: "layouts/page.njk"
---

<div style="max-width:100%; padding: 1em;">
<img src="https://picsum.photos/600/200" alt="picsum image">
<h1>Hallo from {{layout}} Template</h1>
<button id="themetoggle" style="margin-bottom: 1rem;">toggle theme</button>


We could use the additional template `index.njk`

The `index.njk` layout should be used for index pages. It contains some logics to handle multilanguage sites. 

It will check if the `locale` property is present and sets the front-matter `permalink` property accordingly.

<p style="font-size:1.225rem">Current permalink : </p>
<pre>
<code>"{% if locale %}{{ locale }}/{% endif %}index.html"</code>
</pre>

</div>


