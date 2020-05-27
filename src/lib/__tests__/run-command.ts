import { run } from '../run-command';

describe('Run command', () => {
	test('Should run the command', async () => {
		expect.hasAssertions();
		await expect(run('exit', ['0'])).resolves.toBeFalsy();
	});

	test('Should fail', async () => {
		expect.hasAssertions();
		await expect(run('exit', ['1'])).rejects.toThrow();
	});
});
