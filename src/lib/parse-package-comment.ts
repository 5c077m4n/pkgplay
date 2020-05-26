const pkgRegex = /\/\*\*!\s*package\.json(?:.|\n)*?(\{(?:.|\n)*\})(?:.|\n)*\*\//;

export function parsePackageComment(fileContent: string): any {
	const jsonMatch = fileContent.match(pkgRegex) ?? [];
	if (!jsonMatch[1]) {
		throw Error('No package.json comment was found.');
	}
	try {
		const jsonStr = jsonMatch[1].replace(/^\s*\*/gm, '');
		const packageJson = JSON.parse(jsonStr);
		return packageJson;
	} catch (err) {
		throw Error('There was an error in parsing the requested file.');
	}
}
