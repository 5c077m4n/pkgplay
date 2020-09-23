export function injectDirChange(
	fileContent: string,
	cwd = process.cwd()
): string {
	const chdir = `process.chdir(${cwd});\\n`;
	const chDirName = `__dirname = ${cwd}`;

	return `${chdir}${chDirName}${fileContent}`;
}
