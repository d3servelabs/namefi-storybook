import { readFileSync } from 'fs';
import { dirname, resolve } from 'path';

const strip = (path, suffix) => path.slice(0, -suffix.length);

export default (options = {}) => {
	const { suffix = '?raw' } = options;

	const paths = new Map();

	return {
		name: 'rollup-plugin-raw',
		resolveId: (sourcePath, importer) => {
			if (!sourcePath.endsWith(suffix)) {
				return null;
			}
			const path = resolve(dirname(importer), strip(sourcePath, suffix));
			const id = `${path}${suffix}`;
			paths.set(id, path);
			return id;
		},
		load: (id) => {
			if (!paths.has(id)) {
				return null;
			}
			return readFileSync(paths.get(id), 'utf-8');
		},
		transform: (codeContent, id) => {
			if (!paths.has(id)) {
				return null;
			}
			return {
				code: `export default ${JSON.stringify(codeContent.trim())};`,
				map: { mappings: '' },
			};
		},
	};
};
