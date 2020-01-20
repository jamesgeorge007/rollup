import * as chokidarType from 'chokidar';
import relative from 'require-relative';

let chokidar: typeof chokidarType;

try {
	chokidar = relative('chokidar', process.cwd());
} catch {
	chokidar = null as any;
}

export default chokidar;
