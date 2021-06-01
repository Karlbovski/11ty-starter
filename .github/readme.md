# 11ty starter  
<small>`v1.0.3`</small>

<small>dev-cycle `2021.2`</small>

<small>NPM Packages</small>
```sh
    "@11ty/eleventy": "^0.12.1",
    "dayjs": "^1.10.5",
    "markdown-it": "^12.0.6",
    "markdown-it-emoji": "^2.0.0",
    "npm-run-all": "^4.1.5",
    "rollup": "^2.45.2",
    "rollup-plugin-terser": "^7.0.2",
    "sass": "^1.32.8"
```
:construction: :construction: :construction: :construction:

## Nothing fancy here, just a very simple starter for [11ty](https://www.11ty.dev/) projects.

The most barebone setup for a **clone-init-dev** experience and **almost** zero-config approach.

---

I've only added a few pre-configured elements to help me with my usual workflow :

### Multilanguage and Localization
The project is already structured to allow localization and multilanguage features (no implementation).

Follow [this awesome tutorial](https://www.webstoemp.com/blog/multilingual-sites-eleventy/) by [Jérôme Coupé](https://github.com/jeromecoupe) on how we could implement those features.

Even if we are not implementing any multilanguage or localization feature, this starter requires each page/layout to have the keyword `locale` set in its frontmatter.
```yml
<- index.njk ->
---
permalink: index.html
locale: "en"
---
```

### DarkMode
There's a ready to use implementation of a dark/light mode switch.
It's a combination of the `prefers-color-scheme` media query and CSS custom properies.

## Filters
### Date
Use [dayjs](https://day.js.org/en/) to handle date-time stuff.
```html
<- Usage Example - Nunjucks ->
...
<time>{{ post.date | date('YYYY-MM-DD') }}"</time>
...
```
### Excerpts
Create an excerpt of custom lenght.
```html
  <- Usage Example Nunjucks ->
  ...
  {% if post.templateContent %}
  <p><small>{{ post.templateContent | excerpt }}</small></p>
  {% endif %}
  ...
```

---

I might add more features in the future but I'll do my best to remind myself not 
to go into the "this has to be more Generic" rabbit hole!! 🐇

This is a Starter!
Each project will always have different needs.

# Javascript pipeline

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

> How to import the bundled javascript file `main.js` depends on the structure of the project.

Inside partials :
```html
<footer>
    <p>
      <small>&copy;2021-present The Web</small>
    </p>
</footer>
<script type="module" src="/js/main.js"></script>
```
Inside a base layout
```html
<!DOCTYPE html>
<html lang="{% if locale %}{{ locale }}{% else %}en{% endif %}">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        ....
        <script type="module" src="/js/main.js" defer></script>
        ....
```

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
- Clone or Download this repo into a new project folder.
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

### TODO Next

- how to implement Bulma or other third-party framework with Dart Sass (@use and @forward).
- ~~sass migration - remove @imports where possible. Replace with @use and @forward~~
- Test Connect to Netlify
    - Netlify CLI&UI environments setup


