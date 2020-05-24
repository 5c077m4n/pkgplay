import { get as httpGetReq } from 'http';
import { get as httpsGetReq } from 'https';

export function httpGet(url: string): Promise<string> {
	return new Promise((resolve, reject) => {
		(url.startsWith('https://') ? httpsGetReq : httpGetReq)(url, res => {
			if (res.statusCode !== 200) {
				res.resume();
				return reject(
					Error(
						`Request to ${url} has Failed (Status Code: ${res.statusCode}).`
					)
				);
			}

			res.setEncoding('utf8');
			let rawData = '';
			res.on('data', chunk => (rawData += chunk));
			res.on('end', () => resolve(rawData));
		}).on('error', e => reject(e));
	});
}
