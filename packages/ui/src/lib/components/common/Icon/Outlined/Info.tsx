import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const SvgInfo = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		fill="currentColor"
		viewBox="0 0 24 24"
		ref={ref}
		{...props}>
		<path d="M12 8a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2zm-1 3a1 1 0 1 0 0 2v3a1 1 0 0 0 1 1h1a1 1 0 1 0 0-2v-3a1 1 0 0 0-1-1z" />
		<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20M6.343 6.343a8 8 0 1 1 11.314 11.314A8 8 0 0 1 6.343 6.343" />
	</svg>
);
const ForwardRef = forwardRef(SvgInfo);
const Memo = memo(ForwardRef);
export default Memo;
