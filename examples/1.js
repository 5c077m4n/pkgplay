/**! package.json
 * {
 *      "name": "test file",
 *      "scripts": {
 *          "start": "node ./index.js"
 *      },
 *      dependencies: {
 *          "uuid": "8.1.0"
 *      }
 * }
 */

const { v4: uuid } = require('uuid');

console.log(uuid());
