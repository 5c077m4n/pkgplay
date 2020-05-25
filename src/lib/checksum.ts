import { createHash, HexBase64Latin1Encoding } from 'crypto';

export function generateChecksum(
	str: string,
	algorithm = 'md5',
	encoding: HexBase64Latin1Encoding = 'hex'
): string {
	return createHash(algorithm).update(str, 'utf8').digest(encoding);
}
