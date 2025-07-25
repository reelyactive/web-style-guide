reelyActive Web Style Guide
===========================

Style guide for reelyActive webpages and web apps, based on [Bootstrap 5](https://getbootstrap.com).  Everything is open source and [MIT License](https://opensource.org/licenses/MIT) and can be freely used to inspire and facilitate other projects.

![Web Style Guide Screenshot](https://reelyactive.github.io/web-style-guide/images/screenshot.gif)


Browse it as a webpage at [reelyactive.github.io/web-style-guide/](https://reelyactive.github.io/web-style-guide/), where the following additional example pages are included:
- [Tutorial template](https://reelyactive.github.io/web-style-guide/tutorial-example)
- [Web app template](https://reelyactive.github.io/web-style-guide/app-example)
- [Font Awesome cheatsheet](https://reelyactive.github.io/web-style-guide/fontawesome-icons)


Quick Start
-----------

Clone this repository (ex: click the Code button above and Download as ZIP).

Edit any of the `index.html` files in your favourite editor (ex: Notepad, TextEdit).

Open/refresh the `index.html` file in your favourite browser to see the results.

All of the supporting JavaScripts (JS) and Cascading Style Sheets (CSS) are pre-built and included in the [file structure](#file-structure) below.


File Structure
--------------

The files are organised in the following hierarchy:

| Directory | File(s)          | Description                                   |
|:----------|:-----------------|:----------------------------------------------|
| /         | .html            | All the content                               |
| /images/  | .jpg, .png, etc. | All images and graphics supporting the content|
| /style/   | .css             | All the cascading style sheets (Bootstrap)    |
| /js/      | .js              | All the JavaScripts (Bootstrap & Font Awesome)|

The core files are as follows:

| File                               | Purpose                                |
|:-----------------------------------|:---------------------------------------|
| /index.html                        | The webpage or web application content |
| /images/reelyactive-logo-nav.png   | The logo in the top-left corner        |
| /js/boostrappyactive.bundle.min.js | reelyActivated Bootstrap 5 JS          |
| /js/fontawesome-reelyactive.min.js | reelyActive's subset of Font Awesome   |
| /style/bootstrappyactive.min.css   | reelyActivated Bootstrap 5 CSS         |


Building Bootstrap and Font Awesome
-----------------------------------

_This step is only required when customising the scss or icons!_

Install the devDependencies, with the following executable from the command line:
- sass
- cleancss (clean-css-cli)
- webpack
- npm-run-all

Then build (and minify) the Bootstrap 5 CSS with:

    npm run css

Then build the Bootstrap 5 JS with:

    npm run js

Then build (and minify) the Font Awesome subset with:

    npm run fa

The built files are copied to the /js and /style directories.


Bootstrap 5 Colour Modes
------------------------

Version 1.3 of this __web-style-guide__ adopts Bootstrap 5.3 which supports [Color Modes (aka Themes)](https://getbootstrap.com/docs/5.3/customize/color-modes/).  By including the `js/color-modes.js` module, which is adapted from [twbs/examples/color-modes](https://github.com/twbs/examples/tree/main/color-modes), the `prefers-color-scheme` variable is detected from the browser to automatically switch between light/dark mode.  A manual override is provided in the top nav bar of the examples in this style guide, which uses Font Awesome rather than Bootstrap icons, hence the modification of `js/color-modes.js`.


License
-------

MIT License

Copyright (c) 2018-2025 [reelyActive](https://www.reelyactive.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN 
THE SOFTWARE.
