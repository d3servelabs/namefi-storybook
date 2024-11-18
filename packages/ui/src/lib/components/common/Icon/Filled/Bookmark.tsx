import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const SvgBookmark = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		fill="currentColor"
		viewBox="0 0 24 24"
		ref={ref}
		{...props}>
		<path
			d="M7 2a3 3 0 0 0-3 3v16a1 1 0 0 0 1.275.962L12 20.04l6.725 1.922A1 1 0 0 0 20 21V5a3 3 0 0 0-3-3z"
			clipRule="evenodd"
		/>
	</svg>
);
const ForwardRef = forwardRef(SvgBookmark);
const Memo = memo(ForwardRef);
export default Memo;
