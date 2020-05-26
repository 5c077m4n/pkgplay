import { runPkg } from './index';
import { parseCliArgs } from './lib/parse-argv';

const cliArgs = parseCliArgs(process.argv);
runPkg(cliArgs);
