import { spawn } from 'child_process';

export function run(
	command: string,
	args: string[] = [],
	options = {}
): Promise<any> {
	return new Promise((resolve, reject) => {
		const child = spawn(command, args, {
			cwd: process.cwd(),
			shell: process.platform === 'win32',
			windowsHide: true,
			stdio: 'inherit',
			...options,
		});
		child.on('error', reject);
		child.on('close', code => {
			if (code !== 0) {
				return reject(
					Error(`[Process #${child.pid}] Exited with code ${code}.`)
				);
			}
			return resolve();
		});
	});
}
