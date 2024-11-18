import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const SvgNewsletter = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		fill="currentColor"
		viewBox="0 0 24 24"
		ref={ref}
		{...props}>
		<path d="M5 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm1.707 2.793 4.586 4.586a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 1 1 1.414 1.414l-4.586 4.586a3 3 0 0 1-4.242 0L5.293 8.207a1 1 0 0 1 1.414-1.414" />
	</svg>
);
const ForwardRef = forwardRef(SvgNewsletter);
const Memo = memo(ForwardRef);
export default Memo;
