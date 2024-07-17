import { readFileSync } from 'fs';
import { extname } from 'path';
import { createFilter, FilterPattern, PluginOption } from 'vite';
import { default as svgToMiniDataURI } from 'mini-svg-data-uri';

const defaults = {
	exclude: null,
	include: /^.*.svg$/,
};

const mimeTypes = {
	'.jpg': 'image/jpeg',
	'.jpeg': 'image/jpeg',
	'.png': 'image/png',
	'.gif': 'image/gif',
	'.svg': 'image/svg+xml',
	'.webp': 'image/webp',
};
const constTemplate = ({ dataUri }) => `
  var img = "${dataUri}";
  export default img;
`;
const getDataUri = ({ format, isSvg, mime, source }) =>
	isSvg ? svgToMiniDataURI(source) : `data:${mime};${format},${source}`;

export default function (opts: { include: FilterPattern }): PluginOption {
	return {
		name: 'vite-plugin-svg-base64',
		transform(src, id) {
			const options = Object.assign({}, defaults, opts);
			const filter = createFilter(options.include, options.exclude);
			if (!filter(id)) {
				return null;
			}

			const mime = mimeTypes[extname(id)];
			if (!mime) {
				// not an image
				return null;
			}

			this.addWatchFile(id);
			const isSvg = mime === mimeTypes['.svg'];
			const format = isSvg ? 'utf-8' : 'base64';
			const source = readFileSync(id, format).replace(/[\r\n]+/gm, '');
			const dataUri = getDataUri({ format, isSvg, mime, source });
			const code = constTemplate({ dataUri }).trim();

			return {
				code: `${src}\n${code}`,
				map: null,
			};
		},
	};
}
