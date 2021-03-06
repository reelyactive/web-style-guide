reelyActive Web Style Guide
===========================

Style guide for reelyActive webpages and web apps, based on [Bootstrap 5](https://getbootstrap.com).  Everything is open source and [MIT License](https://opensource.org/licenses/MIT).  We believe in an open Internet of Things.

![Web Style Guide Screenshot](https://reelyactive.github.io/web-style-guide/images/screenshot.png)


A webpage template based on this style guide is available at [reelyactive.github.io/web-style-guide/](https://reelyactive.github.io/web-style-guide/), including the following additional example pages:
- [Tutorial template](https://reelyactive.github.io/web-style-guide/tutorial-example)
- [Web app template](https://reelyactive.github.io/web-style-guide/app-example)
- [Font Awesome cheatsheet](https://reelyactive.github.io/web-style-guide/fontawesome-icons)


File Structure
--------------

The files are organised in the following hierarchy:

| Directory | File(s)          | Description                                    |
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


License
-------

MIT License

Copyright (c) 2018-2021 [reelyActive](https://www.reelyactive.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN 
THE SOFTWARE.
