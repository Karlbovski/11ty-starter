# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

#

## [Unreleased]
_Track upcoming changes_

- Exposed Javascript Global functions
  - [docs](https://www.11ty.dev/docs/languages/javascript/#javascript-template-functions)
- Abstraction of **opinionated** functionalities into Plugins
  - -> tbd
- Localization helpers | `locales.js`
- Add Global `shortcodes`
- How to? Implement 3rd party CSS framework/libraries
  -  Implement Bulma or other third-party framework with Dart Sass (`@use` and `@forward`).

#

## branch > _main_

## [0.0.6] <small> Jun 6, 2021</small>

### Added 
<small>`(new features)`</small>

- Injecting minified JS into templates using `_includes`
- Added `jsmin` filter to `.eleventy.js` as global filter
- Added `squash` filter to `.eleventy.js` as global filter
- Added `_data/locales.js` data template.

### Changed 
<small>`(changes in existing functionality)`</small>

- Global Filters now imported from `utils/filter.js`
- sass migration to modern practices - Removed `@imports` where possible. Replaced with `@use` and `@forward`.
- Courtesy Page. Full setup using `courtesy.md` frontmatter entries.

### Deprecated 
<small>`(soon-to-be removed features)`</small>

### Removed 
<small>`(now removed features)`</small>

- JS bundle implementation solution was removed but still implementable if needed. [See readme file](.github/readme.md).
- removed npm package `rollup`
- removed npm package `rollup-plugin-terser`
- removed `_data/header.js` . Info moved into `_data/locales.js`

### Fixed 
<small>`(any bug fixes)`</small>

### Known Issues 
<small>`(aware they are in this release)`</small>

### Security 
<small>`(in case of vulnerabilities)`</small>

- `npm audit` > 3 moderate severity vulnerabilities in 426 scanned packages

# 