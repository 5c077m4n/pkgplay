/**! package.json
 * {
 *      "dependencies": {
 *          "uuid": "8.1.0"
 *      }
 * }
 */

const { v4: uuid } = require('uuid');

console.log(uuid());
console.log(process.cwd());
