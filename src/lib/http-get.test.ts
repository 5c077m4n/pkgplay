import { httpGet } from './http-get';

describe('Test the http getter', () => {
	test('Should get a file successfully', async () => {
		expect.hasAssertions();
		const file = await httpGet(
			'https://raw.githubusercontent.com/5c077m4n/http-responder/master/src/index.ts'
		);
		expect(file.length).toBeGreaterThan(0);
	}, 30_000);

	test('Should fail to get a file successfully', async () => {
		expect.hasAssertions();
		await expect(
			httpGet(
				'https://raw.githubusercontent.com/5c077m4n/http-responder/master/src/123.ts'
			)
		).rejects.toThrow();
	}, 30_000);
});
