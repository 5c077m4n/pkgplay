import { httpGet } from './http-get';

describe('Test the http getter', () => {
	test('Should get a file successfully', async () => {
		const file = await httpGet(
			'https://raw.githubusercontent.com/5c077m4n/http-responder/master/src/index.ts'
		);
		expect(file.length).toBeGreaterThan(0);
	});

	test('Should fail to get a file successfully', async () => {
		await httpGet(
			'https://raw.githubusercontent.com/5c077m4n/http-responder/master/src/123.ts'
		)
			.catch(err => expect(err).toBeTruthy())
			.then(res => expect(res).toBeFalsy());
	});
});
