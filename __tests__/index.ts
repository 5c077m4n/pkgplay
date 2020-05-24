import { run } from '../src/lib/run-command';

describe('Integration tests', () => {
	test('Example file 1', () => {
		expect(
			run('node', ['dist/index.js', '-p=examples/1.js'])
		).resolves.toBeUndefined();
	}, 30_000);

	test('NPX test', () => {
		expect(
			run('npx', ['pkgplay', '-p=examples/1.js'])
		).resolves.toBeUndefined();
	}, 30_000);
});
