import { run } from '../src/lib/run-command';

describe('Integration tests', () => {
	test('Example file 1', async () => {
		await run('node', ['dist/index.js', '-p=examples/1.js']);
	});
});
