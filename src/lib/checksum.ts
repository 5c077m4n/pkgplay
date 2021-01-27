import { createHash, BinaryToTextEncoding } from 'crypto';

export function generateChecksum(
	str: string,
	algorithm = 'md5',
	encoding: BinaryToTextEncoding = 'hex'
): string {
	return createHash(algorithm).update(str, 'utf8').digest(encoding);
}
