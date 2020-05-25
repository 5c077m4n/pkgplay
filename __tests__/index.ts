import { run } from '../src/lib/run-command';

describe('Integration tests', () => {
	test('Example file 1', async () => {
		expect.hasAssertions();
		await expect(
			run('node', ['dist/index.js', '-p=examples/1.js'])
		).resolves.toBeUndefined();
	}, 30_000);

	test('NPX test', async () => {
		expect.hasAssertions();
		await expect(
			run('npx', ['pkgplay', '-p=examples/1.js'])
		).resolves.toBeUndefined();
	}, 30_000);

	test('NPX test remote file', async () => {
		expect.hasAssertions();
		await expect(
			run('npx', [
				'pkgplay',
				'-p=https://raw.githubusercontent.com/5c077m4n/pkgplay/master/examples/1.js',
			])
		).resolves.toBeUndefined();
	}, 30_000);
});
