import { parsePackageComment } from './parse-package-comment';

const packageJsonComment1 = `
	/**! package.json
	 * This package.json is for the best script ever!
	 * 	{
	 * 		"name": "the good comment"
	 *  }
	 */

	const a = 1;
`;
const packageJsonComment2 = `
	/**! package.json
	 * This package.json is for the best script ever!
	 * 	{
	 * 		"name": "harder good comment",
	 * 		"scripts": {
	 * 			"start": "node index.js"
	 * 		}
	 *  }
	 */

	const b = 1;
`;
const packageJsonComment3 = `
	/**! package.json
	 * This package.json is for the best script ever!
	 * 	{
	 * 		"name": "hardest good comment",
	 * 		"husky": {
	 *			"hooks": {
	 *	  			"pre-commit": "lint-staged"
	 *			}
	 *  	}
	 *  }
	 */

	const c = 1;
`;
const badPackageJsonComment1 = `
	/**! package.json
	 *  {
	 * 		"name": "the good comment",
	 *  }
	 */

	const a = 1;
`;

describe('Parsing the package.json comment', () => {
	test('Parsing successfully - simple', () => {
		const json = parsePackageComment(packageJsonComment1);
		expect(json).toEqual({ name: 'the good comment' });
	});

	test('Parsing successfully - harder', () => {
		const json = parsePackageComment(packageJsonComment2);
		expect(json).toEqual({
			name: 'harder good comment',
			scripts: { start: 'node index.js' },
		});
	});

	test('Parsing successfully - hardest', () => {
		const json = parsePackageComment(packageJsonComment3);
		expect(json).toEqual({
			name: 'hardest good comment',
			husky: {
				hooks: {
					'pre-commit': 'lint-staged',
				},
			},
		});
	});

	test('Parsing unsuccessfully', () => {
		expect(() => parsePackageComment(badPackageJsonComment1)).toThrow();
	});
});
