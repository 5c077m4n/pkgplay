import { EOL } from 'os';
import * as path from 'path';

export function injectDirChange(
	fileContent: string,
	fileName = 'index.js',
	cwd = process.cwd()
): string {
	const chdir = `process.chdir("${cwd}");${EOL}`;
	const chDirName = `__dirname = "${cwd}";${EOL}`;
	const chFileName = `__filename = "${path.join(
		cwd,
		fileName
	)}";${EOL}${EOL}`;

	return `${chdir}${chDirName}${chFileName}${fileContent}`;
}
