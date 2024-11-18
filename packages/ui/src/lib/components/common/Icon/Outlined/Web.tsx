import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const SvgWeb = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		fill="currentColor"
		viewBox="0 0 24 24"
		ref={ref}
		{...props}>
		<path d="M4.929 4.929A10 10 0 1 1 19.07 19.07 10 10 0 0 1 4.93 4.93ZM12 4a8 8 0 0 0-7.937 7h15.874A8 8 0 0 0 12 4m7.937 9H4.063a8 8 0 0 0 15.874 0" />
		<path d="M12 2a1 1 0 0 1 .776.37 16.54 16.54 0 0 1 3.684 9.578 1 1 0 0 1 0 .104 16.54 16.54 0 0 1-3.684 9.579 1 1 0 0 1-1.552 0 16.54 16.54 0 0 1-3.684-9.58 1 1 0 0 1 0-.103 16.54 16.54 0 0 1 3.684-9.579A1 1 0 0 1 12 2M9.54 12A14.54 14.54 0 0 0 12 19.323 14.54 14.54 0 0 0 14.46 12 14.54 14.54 0 0 0 12 4.678 14.54 14.54 0 0 0 9.54 12" />
	</svg>
);
const ForwardRef = forwardRef(SvgWeb);
const Memo = memo(ForwardRef);
export default Memo;
