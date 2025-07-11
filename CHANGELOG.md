# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

# [Unreleased]

_Track upcoming changes_ :
- temporary remove html-minifier due to high vulnerabilty issue and no longer maintained. Looking for a substitute, maybe Terser or [html-nano](https://htmlnano.netlify.app/), or to see if html-min is actually an issue in the context of this project since **we're not passing arbitrary user input to html-minifier at runtime. We’re passing limited input under our control at build time...**
- solve the issue with markdown-it-emoji plugin
- Exposed Javascript Global functions
  - [docs](https://www.11ty.dev/docs/languages/javascript/#javascript-template-functions)
- Abstraction of **opinionated** functionalities into Plugins
  - -> tbd
- Add Global `shortcodes`
- How to? Implement 3rd party CSS framework/libraries
  -  Implement Bulma or other third-party framework with Dart Sass (`@use` and `@forward`).

<br>

# [Releases]

## [0.0.6] <small> Jun 15, 2021</small>

### Added 
<small>new features:</small>

- Injecting minified JS into templates using `_includes`
- Added `jsmin` filter to `.eleventy.js` as global filter
- Added `squash` filter to `.eleventy.js` as global filter
- Added `htmlmin` transform as global transform.
- Added `_data/locales.js` data template.
- Added new `metainfo.html` partial with better logics

### Changed 
<small>changes in existing functionality:</small>

- Global Filters now imported from `utils/filter.js`
- sass migration to modern practices - Removed `@imports` where possible. Replaced with `@use` and `@forward`.
- Courtesy Page. Full setup using `courtesy.md` frontmatter entries.
- SASS folders structure to better match templating/layouts naming conventions.
- Since we use `htmlTemplateEngine: "njk"` in our configuration we can use  `.html` files extension for layouts ad partials.

### Deprecated 
<small>soon-to-be removed features:</small>

### Removed 
<small>now removed features:</small>

- JS bundle implementation solution was removed but still implementable if needed. [See readme file](.github/readme.md).
- removed npm package `rollup`
- removed npm package `rollup-plugin-terser`
- removed `_data/header.js` . Info moved into `_data/locales.js`
- removed metaTitle and metaDescriptions from locales
- removed baseLocales.njk and templating tree(include as _includes and with more robust logics).
- `opengraphs.njk` partial (now included in `metainfo.html`)

### Fixed 
<small>any bug fixes:</small>

### Known Issues
- `markdown-it-emoji` not working

### Security 
<small>in case of vulnerabilities:</small>

`npm audit found 0 vulnerabilities`

# 