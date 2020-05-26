export interface CliArgs {
	path: string;
	run: string;
	module: boolean;
	debug: boolean;
}

export function parseCliArgs(argvRaw: string[] = []): CliArgs {
	const argvObject = argvRaw
		.slice(2)
		.map(arg => arg.split('='))
		.reduce((accu: any, [key, value]: string[]) => {
			accu[key] = value ?? true;
			return accu;
		}, {});

	return {
		path: argvObject['--path'] ?? argvObject['-p'] ?? './index.js',
		run: argvObject['--script'] ?? argvObject['-s'] ?? 'start',
		module: argvObject['--module'] ?? argvObject['-m'] ?? false,
		debug: argvObject['--debug'] ?? false,
	};
}
