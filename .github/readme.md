# 11ty starter  
<small>`v1.0.1`</small>

<small>dev-cycle `2020.4`</small>

<small>NPM Packages</small>
```sh
    "@11ty/eleventy": "^0.12.1"
    "npm-run-all": "^4.1.5"
    "rollup": "^2.45.2"
    "rollup-plugin-terser": "^7.0.2"
    "sass": "^1.32.8"
```

## Nothing fancy here, just a very simple starter for [11ty](https://www.11ty.dev/) projects.

The most barebone setup for a **clone-init-dev** experience and almost **zero-config** approach.
I only added a few pre-configured elements to help me with my usual workflow.

:construction: :construction: :construction: :construction:

>The major feature of this starter is its build pipeline for `sass` and `javascript`. All the remaining components can be changed and the project restructured according to the project needs!

___
## Templates pipeline

[11ty](https://www.11ty.dev/docs/templates/) is super-flexible and supports several templates engines. Every project can be structured based on projects needs and current mood!! :)

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
___
## Javascript pipeline

Modular approach. All modules bundled and minified at build-time using:

```sh
"rollup": "^2.36.1",
"rollup-plugin-terser": "^7.0.2",
```
The pipeline is taken from a very interesting article by [Craig Buckler](https://www.sitepoint.com/author/craig-buckler) on Sitepoint > [ Getting Started with 11ty](https://www.sitepoint.com/getting-started-with-eleventy/)

> Client-side JavaScript could be handled with a    **transform**, but **JavaScript** templates named <something>.`11ty.js` are also an option because they’re automatically processed by **Eleventy**. The example code provides **ES6** scripts to implement simple *dark/light* theme switching. **Rollup.js** is used to bundle all modules referenced by `main.js` into a single file and perform tree-shaking to remove any unused functions. The `terser` plugin then minifies the resulting code.

### JS Module | Example
`src/assets/js/modules/dom.js`

`src/assets/js/modules/theme.js`

`src/assets/js/javascript.11ty.js`

`src/assets/js/main.js`

___
## CSS pipeline | sass/scss 
This starter already includes a very basic `Sass/Scss` architecture. 
It's probably not ideal for big projects that's why it can be changed and or extended very easily. I suggest to have something similar to the 7-1 Pattern (7 folders 1 file ).
<details>
<summary>7-1 example</summary>

```css
sass/
|
|–– abstracts/
|   |– _variables.scss    # Sass Variables
|   |– _functions.scss    # Sass Functions
|   |– _mixins.scss       # Sass Mixins
|   |– _placeholders.scss # Sass Placeholders
|
|–– base/
|   |– _reset.scss        # Reset/normalize
|   |– _typography.scss   # Typography rules
|   …                     # Etc.
|
|–– components/
|   |– _buttons.scss      # Buttons
|   |– _carousel.scss     # Carousel
|   |– _cover.scss        # Cover
|   |– _dropdown.scss     # Dropdown
|   …                     # Etc.
|
|–– layout/
|   |– _navigation.scss   # Navigation
|   |– _grid.scss         # Grid system
|   |– _header.scss       # Header
|   |– _footer.scss       # Footer
|   |– _sidebar.scss      # Sidebar
|   |– _forms.scss        # Forms
|   …                     # Etc.
|
|–– pages/
|   |– _home.scss         # Home specific styles
|   |– _contact.scss      # Contact specific styles
|   …                     # Etc.
|
|–– themes/
|   |– _theme.scss        # Default theme
|   |– _admin.scss        # Admin theme
|   …                     # Etc.
|
|–– vendors/
|   |– _bootstrap.scss    # Bootstrap
|   |– _jquery-ui.scss    # jQuery UI
|   …                     # Etc.
|
|– main.scss              # Main Sass file
```

</details>
<br>

### Vendors

**CSS frameworks implementation**

In this example we are going to install and setup [Bulma](https://bulma.io/) since it's my favourite CSS framework when I decide to use one but the same procedure applies to other frameworks as well (of course take a look at their docs). 

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
Now we can use [Bulma](https://bulma.io/) in our design.
> t i l >
If we want to override Bulma variables it must be done before importing Bulma!!



> t i l >
Here we are importing Bulma as a whole. With a different approach we could import selectivily only the modules that we are oing to use! <small>[Read more here](https://bulma.io/documentation/customize/concepts/)</small>.
---

## Usage 
- Fork or Download 11ty-starter project into a new project folder.
- (recommended) Check and set `package.json` file
- `npm install`
- (recommended) Check and set `package.json` file  after install
- (recommended) `npm outdated` - `npm audit`
- `npm run dev` - Dev build
- `npm run build` - Build

## Resources
[11ty Docs](https://www.11ty.dev/docs/)

[Sitepoint | Getting started with 11ty](https://www.sitepoint.com/getting-started-with-eleventy/)

[Phil Hawksworth Blog](https://www.hawksworx.com/blog)

[Webstoemp  | Multilingual sites with Eleventy](https://www.webstoemp.com/blog/multilingual-sites-eleventy/)

[Seifi.org | Using CSS to detect and switch website themes to match system preferences](https://seifi.org/css/prefers-color-scheme.html)

### Dev notes [*to remove*]

- Clone 11ty-starter project into a new project folder.
- Remove remote from cloned repo
- (optional*) Set a new remote repo
- Connect to Netlify
    - Netlify CLI&UI environments setup

