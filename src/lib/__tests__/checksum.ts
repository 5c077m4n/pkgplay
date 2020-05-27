import { generateChecksum } from '../checksum';

describe('Test Checksum generation', () => {
	test('Sanity', () => {
		const hash = generateChecksum('test-phrase');

		expect(hash.length).toBeGreaterThan(0);
	});

	test('Sanity 2', () => {
		const testPhrase = 'test-phrase';
		const hash1 = generateChecksum(testPhrase);
		const hash2 = generateChecksum(testPhrase);

		expect(hash1).toBe(hash2);
	});

	test('Sanity 2', () => {
		const hash1 = generateChecksum('test-phrase-1');
		const hash2 = generateChecksum('test-phrase-2');

		expect(hash1).not.toBe(hash2);
	});
});
