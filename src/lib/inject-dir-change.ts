export function injectDirChange(
	fileContent: string,
	fileName = 'index.js',
	cwd = process.cwd()
): string {
	const chdir = `process.chdir("${cwd}");\\n`;
	const chDirName = `__dirname = "${cwd}";\\n`;
	const chFileName = `__filename = "${cwd}" + "/${fileName}";\\n`;

	return `${chdir}${chDirName}${chFileName}${fileContent}`;
}
