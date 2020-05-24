export function parsePackageComment(fileContent: string): object {
	const [
		_,
		packageJsonString,
	] = /\/\*\*!\s*package\.json(?:.|\n)*?(\{(?:.|\n)*\})(?:.|\n)*\*\//.exec(
		fileContent
	);
	const packageJson = JSON.parse(packageJsonString.replace(/^\s*\*/gm, ''));
	return packageJson;
}
