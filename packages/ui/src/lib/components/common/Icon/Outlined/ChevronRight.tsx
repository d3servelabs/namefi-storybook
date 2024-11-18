import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const SvgChevronRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		fill="currentColor"
		viewBox="0 0 24 24"
		ref={ref}
		{...props}>
		<path d="M9.293 2.293a1 1 0 0 1 1.414 0l9 9a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-1.414-1.414L17.586 12 9.293 3.707a1 1 0 0 1 0-1.414" />
	</svg>
);
const ForwardRef = forwardRef(SvgChevronRight);
const Memo = memo(ForwardRef);
export default Memo;
