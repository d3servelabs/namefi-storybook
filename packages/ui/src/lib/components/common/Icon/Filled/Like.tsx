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
		<path d="M7.95 3.5c.961 0 1.907.239 2.756.696.473.254.908.572 1.295.942A5.84 5.84 0 0 1 16.05 3.5C19.369 3.5 22 6.277 22 9.627c0 2.935-1.66 5.619-3.596 7.644-1.942 2.032-4.323 3.57-6.079 4.175-.21.072-.44.072-.65 0-1.756-.605-4.137-2.143-6.08-4.175C3.66 15.246 2 12.562 2 9.627 2 6.277 4.631 3.5 7.95 3.5" />
	</svg>
);
const ForwardRef = forwardRef(SvgLike);
const Memo = memo(ForwardRef);
export default Memo;
