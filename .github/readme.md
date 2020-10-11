# 11ty starter  
<small>`v1.0.0`</small>

Nothin fancy here, just a very simple starter for [11ty](https://www.11ty.dev/) projects.

Includes some build pipelines :

- A node **sass/scss** pipeline.
- A javascript pipeline based on modules.

and a basic template structure.

## Templates
There are a couple of `nunjucks` templates logics, mostly there as an  example of how to handle multilanguage websites.

_todo doc..._
## Javascript pipeline 
_todo doc..._
## SASS/SCSS | CSS pipeline
_todo doc..._
### Vendors
[Bulma](https://bulma.io/)

Bulma is by far my favourite CSS framework but it's not included by default.
How to have Bulma ready to go ?

`npm i --save-dev bulma@latest`

Open the `src/assets/sass/_vendors.scss` file and un-comment the first line.
```sh
// @import "~bulma/bulma"; // uncomment this line to import Bulma from npm package
```
Then open `src/assets/sass/main.scss` and unncomment the line that imports **vendors**.
```sh
@import "mediaqueries";
@import "typography";
@import "variables";
@import "resets";
// @import "vendors"; // uncomment to import 3rd party css frameworks/libraries
@import "design";
```
> t i l >
If e want to override Bulma variables it must be done before importing Bulma!!

Now we can use Bulma inn our design.

> t i l >
Here we are importing Bulma as a whole. With a different approach we could import selectivily only the modules that we are oing to use!

## Usage 
_todo doc..._

## Resources
[11ty Docs](https://www.11ty.dev/docs/)

[Sitepoint | Getting started with 11ty](https://www.sitepoint.com/getting-started-with-eleventy/)

[Seifi.org | Using CSS to detect and switch website themes to match system preferences](https://seifi.org/css/prefers-color-scheme.html)