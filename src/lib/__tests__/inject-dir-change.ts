import { injectDirChange } from '../inject-dir-change';

describe('Injecting the chdir commands', () => {
	test('Sanity', () => {
		const finalContent = injectDirChange('');
		expect(finalContent).toContain('process.chdir("');
	});
});
