import { createHash } from 'crypto';

export function generateChecksum(str: string, algorithm: string = 'md5', encoding: string = 'hex'): string {
	return createHash(algorithm).update(str, 'utf8').digest(encoding);
}
