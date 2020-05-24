export function parsePackageComment(fileContent: string): any {
	const [
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		_,
		packageJsonString,
	] = /\/\*\*!\s*package\.json(?:.|\n)*?(\{(?:.|\n)*\})(?:.|\n)*\*\//.exec(
		fileContent
	);
	const packageJson = JSON.parse(packageJsonString.replace(/^\s*\*/gm, ''));
	return packageJson;
}
