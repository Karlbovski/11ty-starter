# 11ty starter  
<small>`v1.0.0`</small>

## Nothing fancy here, just a very simple starter for [11ty](https://www.11ty.dev/) projects.

The most barebone setup for a **clone-init-dev** experience and almost **zero-config** approach.
I only added a few pre-configured elements to help me with the workflow I'm used to have.

:construction: :construction: :construction: :construction:

<details>
<summary>Templates pipeline</summary>

## Templates
[11ty](https://www.11ty.dev/docs/templates/) is super-flexible and supports several templates engines. Every project can be structured based on projects needs an current mood!! :)

Example of `nunjucks` templates logics useful to handle multilanguage websites.

```njk
---
permalink: "{% if locale %}{{ locale }}/{% endif %}index.html"
---

{% extends "layouts/page.njk" %}

{% if locale %}
    {% set metaTitle = site[locale].metaTitle %}
    {% set metaDescription = site[locale].metaDescription %}
    {% set metaImage = site[locale].metaImage %}
{% else %}
    {% set metaTitle = site["en"].metaTitle %}
    {% set metaDescription = site["en"].metaDescription %}
    {% set metaImage = site["en"].metaImage %}
{% endif %}

{% block content %}
    {{ content | safe }}
{% endblock %}
```

_todo doc..._
</details>

<details>
<summary>Javascript pipeline</summary>

## Javascript pipeline 
Modular approach. All modules bundled and minified at build time using:

<small><-package.json-></small>
```sh
"rollup": "^2.29.0",
"rollup-plugin-terser": "^7.0.2",
```
The pipeline is taken from a very interesting article by [Craig Buckler](https://www.sitepoint.com/author/craig-buckler) on Sitepoint > [ Getting Started with 11ty](https://www.sitepoint.com/getting-started-with-eleventy/)

> Client-side JavaScript could be handled with a    **transform**, but **JavaScript** templates named <something>.`11ty.js` are also an option because they’re automatically processed by **Eleventy**. The example code provides **ES6** scripts to implement simple *dark/light* theme switching. **Rollup.js** is used to bundle all modules referenced by `main.js` into a single file and perform tree-shaking to remove any unused functions. The `terser` plugin then minifies the resulting code.


### JS Module | Example
`src/assets/js/modules/dom.js`

`src/assets/js/modules/theme.js`

`src/assets/js/javascript.11ty.js`

`src/assets/js/main.js`

_todo doc..._
</details>

<details>
<summary>CSS pipeline</summary>

## CSS pipeline | sass/scss 
_todo doc..._
### Vendors
[Bulma](https://bulma.io/)

Bulma is my favourite CSS framework when I decide to use one but it's not included by default.

How to have Bulma ready to go ?

> `npm i --save-dev bulma@latest`

Now **open** the `src/assets/sass/_vendors.scss` file and un-comment the first line.
```sh
// @import "~bulma/bulma"; // uncomment this line to import Bulma from npm package
```
Then **open** the`src/assets/sass/main.scss` file and uncomment the line that imports **vendors**.
```sh
@import "mediaqueries";
@import "typography";
@import "variables";
@import "resets";
// @import "vendors"; // uncomment to import 3rd party css frameworks/libraries
@import "design";
```
> t i l >
If we want to override Bulma variables it must be done before importing Bulma!!

Now we can use [Bulma](https://bulma.io/) in our design.

> t i l >
Here we are importing Bulma as a whole. With a different approach we could import selectivily only the modules that we are oing to use! <small>[Read more here](https://bulma.io/documentation/customize/with-webpack/)</small>.
</details>
<br/>

## Usage 
_todo doc..._

## Resources
[11ty Docs](https://www.11ty.dev/docs/)

[Sitepoint | Getting started with 11ty](https://www.sitepoint.com/getting-started-with-eleventy/)

[Phil Hawksworth Blog](https://www.hawksworx.com/blog)

[Webstoemp  | Multilingual sites with Eleventy](https://www.webstoemp.com/blog/multilingual-sites-eleventy/)

[Seifi.org | Using CSS to detect and switch website themes to match system preferences](https://seifi.org/css/prefers-color-scheme.html)