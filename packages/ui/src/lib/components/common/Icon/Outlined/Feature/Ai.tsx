import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const SvgAi = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		fill="currentColor"
		viewBox="0 0 24 24"
		ref={ref}
		{...props}>
		<path d="M10 2a1 1 0 0 1 1 1v1h2V3a1 1 0 1 1 2 0v1h3a2 2 0 0 1 2 2v3h1a1 1 0 1 1 0 2h-1v2h1a1 1 0 1 1 0 2h-1v3a2 2 0 0 1-2 2h-3v1a1 1 0 1 1-2 0v-1h-2v1a1 1 0 1 1-2 0v-1H6a2 2 0 0 1-2-2v-3H3a1 1 0 1 1 0-2h1v-2H3a1 1 0 1 1 0-2h1V6a2 2 0 0 1 2-2h3V3a1 1 0 0 1 1-1M6 6v12h12V6zm4.5 4a1 1 0 0 1 1 1v1h-2v-1a1 1 0 0 1 1-1m1 4v1a1 1 0 1 0 2 0v-4a3 3 0 0 0-6 0v4a1 1 0 1 0 2 0v-1zm4-6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1" />
	</svg>
);
const ForwardRef = forwardRef(SvgAi);
const Memo = memo(ForwardRef);
export default Memo;
