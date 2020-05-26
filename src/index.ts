import { promises as fs } from 'fs';
import { tmpdir } from 'os';
import * as path from 'path';

import { parseCliArgs } from './lib/parse-argv';
import { run } from './lib/run-command';
import { httpGet } from './lib/http-get';
import { parsePackageComment } from './lib/parse-package-comment';

export async function runPkg() {
	try {
		const cliArgs = parseCliArgs(process.argv);
		const tempDirPath: string = await fs.mkdtemp(
			path.join(tmpdir(), path.sep)
		);
		if (cliArgs.debug) console.log('tempDirPath:', tempDirPath);

		let fileContent: string;
		if (/^https?:\/\//.test(cliArgs.path)) {
			fileContent = await httpGet(cliArgs.path);
		} else {
			const filePath = path.resolve(path.normalize(cliArgs.path));
			if (cliArgs.debug) console.log('filePath:', filePath);

			const fileContentBuffer = await fs.readFile(filePath);
			fileContent = fileContentBuffer.toString();
		}
		if (cliArgs.debug) console.log('fileContent:', fileContent);

		const packageJson: any = parsePackageComment(fileContent);
		packageJson.scripts = packageJson.scripts ?? {
			start: 'node ./index.js',
		};
		packageJson.name = packageJson.name ?? 'tmp-pkg';
		if (cliArgs.module) packageJson.type = 'module';
		if (cliArgs.debug) console.log('packageJson:', packageJson);

		await Promise.all([
			fs.writeFile(
				path.join(tempDirPath, './package.json'),
				JSON.stringify(packageJson)
			),
			fs.writeFile(path.join(tempDirPath, './index.js'), fileContent),
		]);

		await run('npm', ['install', '.', '--silent'], { cwd: tempDirPath });
		await run('npm', ['run', cliArgs.run], { cwd: tempDirPath });
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
}
