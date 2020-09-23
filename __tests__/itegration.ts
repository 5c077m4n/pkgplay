import { run } from '../src/lib/run-command';

describe('Integration tests', () => {
	describe('Local dist', () => {
		test('Local example file 1', async () => {
			expect.hasAssertions();
			await expect(
				run('node', [
					'./dist/index.js',
					'-p="examples/1.js"',
					'--debug',
				])
			).resolves.toBeUndefined();
		}, 30_000);

		test('Remote example file 1', async () => {
			expect.hasAssertions();
			await expect(
				run('node', [
					'./dist/index.js',
					'-p="https://raw.githubusercontent.com/5c077m4n/pkgplay/master/examples/1.js"',
					'--debug',
				])
			).resolves.toBeUndefined();
		}, 30_000);
	});

	describe('NPM dist', () => {
		test('Local example file 1', async () => {
			expect.hasAssertions();
			await expect(
				run('npx', ['pkgplay', '-p="examples/1.js"', '--debug'])
			).resolves.toBeUndefined();
		}, 30_000);

		test('Remote example file 1', async () => {
			expect.hasAssertions();
			await expect(
				run('npx', [
					'pkgplay',
					'-p="https://raw.githubusercontent.com/5c077m4n/pkgplay/master/examples/1.js"',
					'--debug',
				])
			).resolves.toBeUndefined();
		}, 30_000);
	});
});
