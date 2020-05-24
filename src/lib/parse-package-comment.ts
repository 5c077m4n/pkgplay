export function parsePackageComment(fileContent: string): any {
	const matches =
		/\/\*\*!\s*package\.json(?:.|\n)*?(\{(?:.|\n)*\})(?:.|\n)*\*\//.exec(
			fileContent
		) ?? [];
	const packageJsonString = matches[1];
	const packageJson = JSON.parse(
		packageJsonString[1].replace(/^\s*\*/gm, '')
	);
	return packageJson;
}
