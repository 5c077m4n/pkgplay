/**! package.json
 * {}
 */

const path = require('path');
const fs = require('fs');

fs.readFile(path.resolve('./find-local-file.json'), (error, file) => {
	if (error) {
		console.error(error);
	} else {
		console.log(file.toString());
	}
});
