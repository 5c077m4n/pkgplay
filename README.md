# pkgplay

[![Linux Test Suite](https://github.com/5c077m4n/pkgplay/workflows/Linux%20Testing%20Suite/badge.svg)](https://github.com/5c077m4n/pkgplay/actions?query=workflow%3A%22Linux+Test+Suite%22)
[![MacOS Test Suite](https://github.com/5c077m4n/pkgplay/workflows/MacOS%20Testing%20Suite/badge.svg)](https://github.com/5c077m4n/pkgplay/actions?query=workflow%3A%22MacOS+Test+Suite%22)
[![Windows Test Suite](https://github.com/5c077m4n/pkgplay/workflows/Windows%20Testing%20Suite/badge.svg)](https://github.com/5c077m4n/pkgplay/actions?query=workflow%3A%22Windows+Test+Suite%22)
[![Coverage Status](https://coveralls.io/repos/github/5c077m4n/pkgplay/badge.svg?branch=master)](https://coveralls.io/github/5c077m4n/pkgplay?branch=master)

A cli tool to run whole npm scripts without having to `npm init` or `npm install` anything!

How many times did you need to automate some small task but didn't because you didn't want to go through the hassle of creating a new npm package just for a few seconds?

Well, now you have your answer! All you need to do is create a file (say `index.js`...) and then just `npx pkgplay` (or `npm install -g pkgplay` and `pkgplay`)!

| CLI arg            | Uses                                                           |
| ------------------ | -------------------------------------------------------------- |
| `-p` or `--path`   | Get the requested file (may be remote) - default: `./index.js` |
| `-s` or `--script` | The script that you want to run - default: `start`             |


### Example file

```javascript
/**! package.json
 * {
 *      "dependencies": {
 *          "uuid": "8.1.0"
 *      }
 * }
 */

const { v4: uuidv4 } = require('uuid');

console.log(uuidv4());
```

And then:

```bash
npx pkgplay -p=<filepath>
```

*Happy scripting! ;)*
