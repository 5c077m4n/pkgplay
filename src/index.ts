import { promises as fs } from 'fs';
import { tmpdir } from 'os';
import * as path from 'path';

import { parseCliArgs } from './lib/parse-argv';
import { run } from './lib/run-command';
import { httpGet } from './lib/http-get';
import { parsePackageComment } from './lib/parse-package-comment';

(async function main() {
	try {
		const cliArgs = parseCliArgs(process.argv);
		const tempDirPath: string = await fs.mkdtemp(
			path.join(tmpdir(), path.sep)
		);

		let fileContent: string;
		if (/^https?:\/\//.test(cliArgs.path)) {
			fileContent = await httpGet(cliArgs.path);
		} else {
			const fileContentBuffer = await fs.readFile(
				path.resolve(cliArgs.path)
			);
			fileContent = fileContentBuffer.toString();
		}

		const packageJson: any = parsePackageComment(fileContent);
		packageJson.scripts = packageJson.scripts || {
			start: 'node ./index.js',
		};

		await Promise.all([
			fs.writeFile(
				path.join(tempDirPath, './package.json'),
				JSON.stringify(packageJson)
			),
			fs.writeFile(path.join(tempDirPath, './index.js'), fileContent),
		]);

		await run('npm', ['install', '.'], { cwd: tempDirPath });
		await run('npm', ['run', cliArgs.run], { cwd: tempDirPath });
	} catch (err) {
		console.error(err);
	}
})();
