---
metaTitle: Home
metaDescription: Meta description in front matter
metaKeywords:
layout: "layouts/base.njk"
---

<div>
<!-- <img src="https://picsum.photos/1200/320" alt="picsum image"> -->
<h1>Hallo from {{layout}} Template</h1>

##  Me: Usually, with flexibility comes complexity. 
### `11ty` : not under my watch.
### that's why I <3 it.
This is a markdown page. Probably we want to use [Nunjucks](https://mozilla.github.io/nunjucks/)
templates to extends base templates and add collections to consume data and do all the other 8-) things.

<pre>
url:<span>
<code>"{% if locale %}{{ locale }}/{% endif %}{{page.url}}"</code>
</span> 
outputPath:<span>
<code>"{% if locale %}{{ locale }}/{% endif %}{{page.outputPath}}"</code>
</span>
</pre>

</div>


