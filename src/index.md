---
metaTitle: Home
metaDescription: Meta description in front matter
metaKeywords:
layout: "layouts/base.njk"
---

<div>
<img src="https://picsum.photos/1200/320" alt="picsum image">
<h3>Hallo from {{layout}} Template</h3>
<button id="themetoggle" style="margin-bottom: 1rem;">toggle theme</button>

##  Usuall with flexibility comes complexity. 
#### With `11ty` it's acutally not the case, that's why i love it.
This is a markdown page. Probably we want to use Nunjucks
templates to extends base templates and add collections to consume data, and , and ...


<p style="font-size:1.225rem">Current permalink : </p>
<pre>
<code>"{% if locale %}{{ locale }}/{% endif %}index.html"</code>
</pre>

</div>


