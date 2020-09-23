import { promises as fs } from 'fs';
import { tmpdir } from 'os';
import * as path from 'path';

import type { CliArgs } from './lib/parse-argv';
import { run } from './lib/run-command';
import { httpGet } from './lib/http-get';
import { parsePackageComment } from './lib/parse-package-comment';
import { injectDirChange } from './lib/inject-dir-change';

export async function runPkg(cliArgs: CliArgs): Promise<void> {
	try {
		const tempDirPath: string = await fs.mkdtemp(
			path.join(tmpdir(), path.sep)
		);
		if (cliArgs.debug) console.debug('tempDirPath:', tempDirPath);

		let fileContent: string;
		const basename: string = path.basename(cliArgs.path);

		if (/^https?:\/\//.test(cliArgs.path)) {
			fileContent = await httpGet(cliArgs.path);
			fileContent = injectDirChange(fileContent, basename);
		} else {
			const filePath = path.resolve(path.normalize(cliArgs.path));
			if (cliArgs.debug) console.debug('filePath:', filePath);

			const fileContentBuffer = await fs.readFile(filePath);
			fileContent = fileContentBuffer.toString();
			fileContent = injectDirChange(
				fileContent,
				basename,
				path.dirname(filePath)
			);
		}
		if (cliArgs.debug) console.debug('fileContent:', fileContent);

		const packageJson: any = parsePackageComment(fileContent);
		packageJson.scripts = packageJson.scripts ?? {
			start: `node ./${basename}`,
		};
		packageJson.name = packageJson.name ?? 'tmp-pkg';
		if (cliArgs.module) packageJson.type = 'module';
		if (cliArgs.debug) console.debug('packageJson:', packageJson);

		await Promise.all([
			fs.writeFile(
				path.join(tempDirPath, './package.json'),
				JSON.stringify(packageJson)
			),
			fs.writeFile(path.join(tempDirPath, `./${basename}`), fileContent),
		]);

		await run('npm', ['install', '.', '--silent'], { cwd: tempDirPath });
		await run('npm', ['run', cliArgs.run], { cwd: tempDirPath });
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
}
