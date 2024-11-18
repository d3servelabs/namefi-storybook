import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const SvgLike = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		fill="currentColor"
		viewBox="0 0 24 24"
		ref={ref}
		{...props}>
		<path d="M7.95 3c.961 0 1.907.239 2.756.696.473.254.908.572 1.295.942A5.84 5.84 0 0 1 16.05 3C19.369 3 22 5.777 22 9.127c0 2.935-1.66 5.619-3.596 7.644-1.942 2.032-4.323 3.57-6.079 4.175-.21.072-.44.072-.65 0-1.756-.605-4.137-2.143-6.08-4.175C3.66 14.746 2 12.062 2 9.127 2 5.777 4.63 3 7.95 3m0 0v1zm1.808 2.457A3.8 3.8 0 0 0 7.951 5H7.95C5.801 5 4 6.814 4 9.127c0 2.193 1.265 4.403 3.042 6.262 1.637 1.713 3.573 2.983 4.958 3.543 1.385-.56 3.321-1.83 4.958-3.543C18.735 13.53 20 11.319 20 9.127 20 6.814 18.199 5 16.05 5c-1.32 0-2.5.677-3.223 1.74a1 1 0 0 1-1.655 0 4 4 0 0 0-1.414-1.283" />
	</svg>
);
const ForwardRef = forwardRef(SvgLike);
const Memo = memo(ForwardRef);
export default Memo;
