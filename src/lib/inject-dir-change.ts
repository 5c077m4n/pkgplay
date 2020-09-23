import { EOL } from 'os';

export function injectDirChange(
	fileContent: string,
	fileName = 'index.js',
	cwd = process.cwd()
): string {
	const chdir = `process.chdir("${cwd}");${EOL}`;
	const chDirName = `__dirname = "${cwd}";${EOL}`;
	const chFileName = `__filename = "${cwd}" + "/${fileName}";${EOL}${EOL}`;

	return `${chdir}${chDirName}${chFileName}${fileContent}`;
}
