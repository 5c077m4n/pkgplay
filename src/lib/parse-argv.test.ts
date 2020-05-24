import { parseCliArgs } from './parse-argv';

describe('Parsing CLI args', () => {
	test('Should default object parse well', () => {
		const args = parseCliArgs();
		expect(args).toEqual({ path: './index.js', run: 'start' });
	});

	test('Should parse well', () => {
		const args = parseCliArgs(['node', 'file/path', '-p=1.js']);
		expect(args).toEqual({ path: '1.js', run: 'start' });
	});
});
