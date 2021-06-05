# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

<small>
The <b>Unreleased</b> section serves two purposes:

- People can see what changes they might expect in upcoming releases
- At release time, you can move the Unreleased section changes into a new release version section.
</small>

## [Unreleased]
_Track upcoming changes_

- Exposed Javascript Global functions
  - [docs](https://www.11ty.dev/docs/languages/javascript/#javascript-template-functions)
- Abstraction of opinioneted functionalities into Plugins
  - docs -> todo
- How to? Implement 3rd party CSS framework/libraries
  -  Implement Bulma or other third-party framework with Dart Sass (`@use` and `@forward`).
---
## [0.0.6] <small> Jun 5, 2021</small>

### Added 
<small>`(new features)`</small>

- Injecting minified JS into templates using `_includes`
- Added `jsmin` filter to `.eleventy.js` as global filter

### Changed 
<small>`(changes in existing functionality)`</small>

- Global Filters now imported from `utils/filter.js`
- sass migration to modern practices - Removed `@imports` where possible. Replaced with `@use` and `@forward`.

### Deprecated 
<small>`(soon-to-be removed features)`</small>

### Removed 
<small>`(now removed features)`</small>

- JS bundle implementation solution was removed but still implementable if needed. [See readme file](.github/readme.md).

### Fixed 
<small>`(any bug fixes)`</small>

### Security 
<small>`(in case of vulnerabilities)`</small>

---