import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const SvgMinus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		fill="currentColor"
		viewBox="0 0 24 24"
		ref={ref}
		{...props}>
		<path d="M12 11h8a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2z" />
	</svg>
);
const ForwardRef = forwardRef(SvgMinus);
const Memo = memo(ForwardRef);
export default Memo;
