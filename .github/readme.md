# 11ty starter
<small>`v0.0.8`</small> |
<small>dev-cycle `2025.3`</small> | 
<small>NPM Packages</small>
```sh
    "@11ty/eleventy": "^3.1.2",
    "dayjs": "^1.11.13",
    "markdown-it": "^14.1.0",
    "markdown-it-emoji": "^3.0.0",
    "npm-run-all": "^4.1.5",
    "sass": "^1.89.2"
```
:construction: :construction: :construction: :construction:

## Nothing fancy here, just a very simple starter for my [11ty](https://www.11ty.dev/) projects.

The most barebone setup for a **clone-init-dev** experience and **almost** zero-config approach.

I've only added a few pre-configured elements to help me with my usual workflow.

<br>

# Multilanguage and Localization
The starter is already structured to allow localization and multilanguage features.

[This awesome tutorial](https://www.webstoemp.com/blog/multilingual-sites-eleventy/) by [Jérôme Coupé](https://github.com/jeromecoupe) shows a clever approach to implement those features.

This starter just contains a data template called `[locales]` in which we can include every aspect related with localization.

<small>`_data/locales.js`</small>
```js
module.exports = [{
    label: "english",
    locale: "en",
    default: true,
    navItems: [{
        label: "Home",
        url: "/"
      },
      {
        label: "About",
        url: "/about/index.html"
      }
    ]
  },
  {
    label: "français",
    locale: "fr",
    navItems: [{
        label: "Home",
        url: "/fr/"
      },
      {
        label: "About",
        url: "/fr/about/index.html"
      }
    ]
  },
  {
    label: "italiano",
    locale: "it"
  },
  {
    label: "español",
    locale: "es"
  },
  {
    label: "deutsch",
    locale: "de"
  },
  ...
```

This could be useful in many ways.

For example it allows to set variables into templates based on the current page locale.

If we set the **frontmatter key** `locale` in a layout
```yml
<- index.njk ->
---
permalink: index.html
locale: "en"
---
```
We have a connection between the **layouts** and the **data-template** `locales`.

We could, for example,  iterate the data-template `locales.js` to look for a match with the **page** `locale` key in its frontmatter :

```sh
{% for language in locales %}
  {% if locale and locale === language.locale %}
    # { _do more awesome stuff_ } #
  {% endif %}
{% endfor %}
``` 
### A practical example:
Set our navigation items to match the current language :
```sh
<header>
  {% for language in locales %}
    {% if locale and locale === language.locale %}
      {% for navItem in language.navItems %}
        <a href="{{ navItem.url }}">{{ navItem.label }}</a>
      {% endfor %}
    {% else %}
      {% if language.default %}
        {% for navItem in language.navItems %}
          <a href="{{ navItem.url }}">{{ navItem.label }}</a>
        {% endfor %}
      {% endif %}
    {% endif %}
  {% endfor %}
</header>
```
> note<br>It's not mandatory to set a `locale` in a page frontmatter.

>**In a nutshell** <br>The `locales.js` data template is there if we want to use it, otherwise we opt-out and do the whole thing in another way. **11ty** super-powers!

><b>tl;dr</b><br>If a page has no `locale` specified in its frontmatter, we could pick one from `locales.js` that has the `default` parameter set or just do nothing and let the `base.njk` template to fallback to global values.<br> 

<br>

# Dark Mode
There's a ready to use implementation of a dark/light mode switch.
It's a combination of the `prefers-color-scheme` media query and CSS custom properies.

<br>

# Filters
Filters are served from dedicated files and imported using `.eleventy.js` config file. I prefer this way of doing it but as always in **11ty** we can mix and match the ways we do our thing.

## Included Filters Usage
<small>in `utils/filters.js`</small>
### Date
Use [dayjs](https://day.js.org/en/) to handle date-time stuff.
```html
<- Usage Example - Nunjucks ->
...
<time>{{ post.date | date('YYYY-MM-DD') }}"</time>
...
```

### Excerpts
_Create an excerpt of custom lenght_
```html
  <- Usage Example Nunjucks ->
  ...
  {% if post.templateContent %}
  <p><small>{{ post.templateContent | excerpt }}</small></p>
  {% endif %}
  ...
```
### jsmin
_Compress and combine js files_
```html
  <- Usage Example Nunjucks ->
  ...
  {% set js %}
    {% include "js/dom.js" %}
    {% include "js/darkmode.js" %}
    {% include "js/btnLog.js" %}
  {% endset %}
  <script type="text/javascript">{{ js | jsmin | safe }}</script>
  ...
```

<br>

# Transforms 

### htmlmin
_Minifies html_

<br>

# Courtesy Page
<small>layout : `courtesy.html`</small>

<small>page : `courtesy.md`</small>

Template for a courtesy page that allows to set it's parameters with countdown feature. Perfect for a redirect during maintenance!!

---

I might add more features in the future but I'll do my best to remind myself not 
to go into the "this has to be more Generic" rabbit hole!! 🐇

 
> Me : "This is a Starter! This is a Starter! This is a Starter! This is a Starter! "

> also me: "Aaand..it's opinionated, you're welcome!" :sad:

<br>

# Javascript pipeline
> _...11ty has no standardized way of handling assets...it gives you the flexibility to handle this any way you want, rather than forcing an opinionated way of doing things on you that might not fit your specific needs._

For example Client-side JavaScript could be handled with a **transform**, but **JavaScript** templates named <something>.`11ty.js` are also an option because they’re automatically processed by **Eleventy**.


## Let 11ty do the thing

> _I'm moving this project towards a fully-integrated way of doing things. std-by..._

Menawhile read this :
    
[Asset Pipelines in Eleventy by Max Böck](https://mxb.dev/blog/eleventy-asset-pipeline/)

### Don't be Me!
Enable `.11ty.js` templates in your config :

<small>`.eleventy.js`</small>
```js
...
  return {
    dir: {
      input: "src",
      output: "public"
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    // Specify which types of templates should be transformed.
    templateFormats: ["html", "njk", "md", "11ty.js"]
  }
...
```

## Option#1: Eleventy - Includes with filters (Current implementation)
> This is an example of approach that is fully integrated with **11ty** pipeline and it's **implemented in this starter**.

We have our **modules** inside the default `_includes` folder.

```sh
├─ src/
│  ├─ _includes/
│  │  ├─ js/
│  │  │  ├─ dom.js
│  │  │  ├─ theme.js
├─ 
```
Then we add a global **filter** inside the **eleventy** config file :

<small>`.eleventy.js`</small>
```js
...
  // compress and combine js files
  eleventyConfig.addFilter("jsmin", function (code) {
    const UglifyJS = require("uglify-js");
    let minified = UglifyJS.minify(code);
    if (minified.error) {
      console.log("UglifyJS error: ", minified.error);
      return code;
    }
    return minified.code;
  });
...
```
Now we can add our **Client-side Javascript** in ours templates.

<small>Nunjucks Example. File :  `footer.njk`</small>
```html
<footer>
  <p>
    <small>&copy;2021-present The Web</small>
  </p>
</footer>
{% set js %}
  {% include "js/dom.js" %} 
  {% include "js/theme.js" %} 
  {% include "js/btn-log.js" %}
{% endset %}
<script type="text/javascript">{{ js | jsmin | safe }}</script>
```
> _If we keep all the above small and we use filters to integrate further functionalities, this is a very flexible and intuitive approach. I'm using it more and more often._

>NOTE<br>The footer partial format is `.njk`. I was having troubles using `.html` since the last line of code `<script type="text/javascript">{{ js | jsmin | safe }}</script>` was wrongly formatted.<br>... _stay-tuned_ ...

## Option#2: External Modular approach (Optional implementation)

> Another interesting pipeline taken from an article by [Craig Buckler](https://www.sitepoint.com/author/craig-buckler) on Sitepoint : [ Getting Started with 11ty](https://www.sitepoint.com/getting-started-with-eleventy/). 

<small>All modules are bundled and minified at build-time using: </small>
```sh
"rollup": "^2.36.1",
"rollup-plugin-terser": "^7.0.2",
```
### Implementation

```sh 
npm install rollup
```

```sh 
npm install rollup-plugin-terser
```

**Rollup.js** is used to bundle all modules referenced by `main.js` into a single file and perform tree-shaking to remove any unused functions. 

The **terser** plugin then minifies the resulting code.

> `Create` the `js` folder and files using this structure :
```
├─ src/
│  ├─ js/
│  │  ├─ modules/
│  │  │  ├─ theme.js
│  │  ├─ javascript.11ty.js
│  │  ├─ main.js
│  
├─ utils/
├─ .eleventy.js
...
```

Almost everything happens inside the `js` folder.

> `Create`  (_If not done yet_) `javascript.11ty.js` inside the `src/js` folder

> `Copy` [this code](https://gist.github.com/Karlbovski/dfa1bab2cb8479b7d6bf33e827ce6e94) inside `javascript.11ty.js` file. 

The template will do the rest.

We use the `main.js` file to import modules we want to include in our bundle :

<small>`main.js`</small>
```js
import * as theme from './modules/theme.js';
```

We end up with a file called `main.js` (default permalink `js/main.js`).

> How to import the bundled javascript file `main.js` depends on the structure of the project.

<small>Example Inside partials :</small>
```html
<footer>
    <p>
      <small>&copy;2021-present The Web</small>
    </p>
</footer>
<script type="module" src="/js/main.js"></script>
```
    
</br>

# CSS pipeline | sass/scss 
This starter already includes a very basic `Sass/Scss` architecture that uses **modern** `Sass` **standards**. 

Everything is already set to `watch` and `build` from the `Sass` folder into our `public` folder.

> The `Sass` pattern/structure used is not final and it will change.

The `Sass` pattern is inspired by the 7-1 Pattern (7 folders 1 file ) but simplified.


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

## Typography
I tend not to use self-hosted fonts by default. Who knows where the website is gonna be hosted and how good the CDN is, if there's one.
Of course this can be easily changed if we know that the website is going to have a powerful host/cdn to serve its content.

### Default
The fonts calling the Google API inside the `<head>` of the base template.
```html
        ...
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Quattrocento&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="{{ '/css/main.css' | url }}"/>
        ...
```

I use [Type-scale css file](https://type-scale.com/) to set font-size as **root variables**. They are available across the entire project and applied to **html elements** inside the `reset.scss` file.

## resets.scss
The resets are based on [Andy Bell's modern CSS reset](https://piccalil.li/blog/a-modern-css-reset/) plus some custom rules and preliminary TYPOGRAPHY setup.

## Vendors 

**CSS frameworks implementation** - TBD

<details>
<summary>Legacy method</summary>

In this example we are going to install and setup [Bulma](https://bulma.io/) since it's my favourite CSS framework when I decide to use one but the same procedure applies to other frameworks as well (of course take a look at their docs). 

How to have Bulma ready to go ?

> `npm i --save-dev bulma@latest`

Now **open** the `src/assets/sass/_vendors.scss` file and un-comment the first line.
```sh
// @import "~bulma/bulma"; // uncomment this line to import Bulma from npm package
```
Then **open** the`src/assets/sass/main.scss` file and uncomment the line that imports **vendors**.
```sh
@use "base";
@use "components";
@use "layouts";
// @import "vendors"; // uncomment to import 3rd party css frameworks/libraries
```
Now we can use [Bulma](https://bulma.io/) in our design.
> t i l >
If we want to override Bulma variables it must be done before importing Bulma!!

> t i l >
Here we are importing Bulma as a whole. With a different approach we could import selectivily only the modules that we are oing to use! <small>[Read more here](https://bulma.io/documentation/customize/concepts/)</small>.
</details>

</br>

# Templates

[11ty](https://www.11ty.dev/docs/templates/) is super-flexible and supports several templates engines. Every project can be structured based on projects needs and current mood!! :)

This starter uses [`nunjucks`](https://www.11ty.dev/docs/languages/nunjucks/) for templates.
</br>

# Usage 
- Download this repository
- `npm install`
- (recommended) run `npm outdated` - `npm audit`
- `npm run dev` or `npm run build`

<br>

# Resources
[11ty Docs](https://www.11ty.dev/docs/)

[Sitepoint | Getting started with 11ty](https://www.sitepoint.com/getting-started-with-eleventy/)

[Phil Hawksworth Blog](https://www.hawksworx.com/blog)

[Webstoemp  | Multilingual sites with Eleventy](https://www.webstoemp.com/blog/multilingual-sites-eleventy/)

[Seifi.org | Using CSS to detect and switch website themes to match system preferences](https://seifi.org/css/prefers-color-scheme.html)

<br>

### 11ty Reminders

1. In Eleventy, `tags` are used to **construct collections of content**. In WordPress, `tags` are just a type of **taxonomy** with no hierarchy.

<br>


