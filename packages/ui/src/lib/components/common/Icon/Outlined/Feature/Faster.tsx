import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const SvgFaster = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		fill="currentColor"
		viewBox="0 0 24 24"
		ref={ref}
		{...props}>
		<path d="M9 3a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1m-5.324 8.77a8.498 8.498 0 0 1 16.819 1.729c0 4.691-3.803 8.499-8.497 8.499L8.114 22a1 1 0 1 1-.001-2l3.884-.002a6.5 6.5 0 0 0 0-12.998 6.5 6.5 0 0 0-6.362 5.174 1 1 0 1 1-1.959-.405Zm10.531-1.477a1 1 0 0 1 0 1.414l-2.5 2.5a1 1 0 0 1-1.414-1.414l2.5-2.5a1 1 0 0 1 1.414 0M2 15a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m3 3a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1" />
	</svg>
);
const ForwardRef = forwardRef(SvgFaster);
const Memo = memo(ForwardRef);
export default Memo;
