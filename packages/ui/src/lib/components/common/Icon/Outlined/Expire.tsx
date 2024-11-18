import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const SvgExpire = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		fill="currentColor"
		viewBox="0 0 24 24"
		ref={ref}
		{...props}>
		<path d="M4.929 4.929A10 10 0 0 1 21.75 9.778a1 1 0 0 1-1.95.444 8 8 0 1 0-4.739 9.169 1 1 0 0 1 .766 1.848A10 10 0 0 1 4.929 4.929" />
		<path d="M12 7a1 1 0 0 1 1 1v5a1 1 0 0 1-.22.625l-2 2.5a1 1 0 1 1-1.56-1.25L11 12.65V8a1 1 0 0 1 1-1m10 8a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0zm-1 5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2z" />
	</svg>
);
const ForwardRef = forwardRef(SvgExpire);
const Memo = memo(ForwardRef);
export default Memo;
