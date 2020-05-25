const pkgRegex = /\/\*\*!\s*package\.json(?:.|\n)*?(\{(?:.|\n)*\})(?:.|\n)*\*\//;

export function parsePackageComment(fileContent: string): any {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [_, jsonMatch = ''] = pkgRegex.exec(fileContent) ?? [];
	const packageJson = JSON.parse(jsonMatch.replace(/^\s*\*/gm, ''));
	return packageJson;
}
