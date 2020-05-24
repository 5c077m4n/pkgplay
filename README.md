# pkgplay

![Node.js CI Testing Suite](https://github.com/5c077m4n/pkg-play/workflows/Node.js%20CI%20Testing%20Suite/badge.svg)

A cli tool to run whole npm scripts without having to `npm init` or `npm install` anything!

How many times did you need to automate some small task but didn't because you didn't want to go through the hassle of creating a new npm package just for a few seconds?

Well, now you have your answer! All you need to do is create a file (say `index.js`...) and after `npm install -g pkgplay` just `pkgplay`!

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
pkgplay -p=<filepath>
```

*Happy scripting! ;)*
