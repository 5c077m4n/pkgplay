import { injectDirChange } from '../inject-dir-change';

describe('Injecting the chdir commands', () => {
	test('Sanity', () => {
		const finalContent = injectDirChange('');
		console.log(finalContent);
		expect(finalContent).toContain('process.chdir("');
	});
});
