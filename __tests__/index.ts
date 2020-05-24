import { run } from '../src/lib/run-command';

describe('Integration tests', () => {
	test('Example file 1', () => {
		expect(
			run('node', ['dist/index.js', '-p=examples/1.js'])
		).resolves.toBeUndefined();
	});

	test.skip('NPX test', () => {
		expect(
			run('npx', ['pkg-play', '-p=examples/1.js'])
		).resolves.toBeUndefined();
	});
});
