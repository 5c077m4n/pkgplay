import { run } from './run-command';

describe('Run command', () => {
	test('Should run the command', () => {
		return expect(run('exit', ['0'])).resolves.toBeFalsy();
	});

	test('Should fail', () => {
		return expect(run('exit', ['1'])).rejects.toThrow();
	});
});
