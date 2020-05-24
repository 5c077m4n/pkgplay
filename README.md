# pkg-play

![Node.js CI Testing Suite](https://github.com/5c077m4n/pkg-play/workflows/Node.js%20CI%20Testing%20Suite/badge.svg)

A cli tool to run whole npm scripts without having to `npm init` or `npm install` anything!

How many times did you need to automate some small task but didn't because you didn't want to go through the hassle of creating a new npm package just for a few seconds?

Well, now you have your answer! All you need to do is create a file (say `index.js`...) and then run in that dir `npx pkg-play`!

| CLI arg            | Uses                                                           |
| ------------------ | -------------------------------------------------------------- |
| `-p` or `--path`   | Get the requested file (may be remote) - default: `./index.js` |
| `-s` or `--script` | The script that you want to run - default: `start`             |

[Example](examples/1.js)

*Happy scripting! ;)*
