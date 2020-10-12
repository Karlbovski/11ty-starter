---
metaTitle: Home
metaDescription: Meta description in front matter
layout: "layouts/base.njk"
---

<div>
<img src="https://picsum.photos/600/200" alt="picsum image">
<h1>Hallo from {{layout}} Template</h1>
<button id="themetoggle" style="margin-bottom: 1rem;">toggle theme</button>

<p style="font-size:1.225rem">Current permalink : </p>
<pre>
<code>"{% if locale %}{{ locale }}/{% endif %}index.html"</code>
</pre>

</div>


