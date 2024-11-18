import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const SvgArrowRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		fill="currentColor"
		viewBox="0 0 24 24"
		ref={ref}
		{...props}>
		<path d="M11.309 2.293a1 1 0 0 1 1.414 0l8.984 8.984a1 1 0 0 1 0 1.415l-8.984 8.984a1 1 0 0 1-1.415-1.414l7.278-7.278H3a1 1 0 1 1 0-2h15.586l-7.277-7.277a1 1 0 0 1 0-1.414" />
	</svg>
);
const ForwardRef = forwardRef(SvgArrowRight);
const Memo = memo(ForwardRef);
export default Memo;
