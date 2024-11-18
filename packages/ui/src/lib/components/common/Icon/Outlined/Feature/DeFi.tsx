import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const SvgDeFi = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		fill="currentColor"
		viewBox="0 0 24 24"
		ref={ref}
		{...props}>
		<path d="M11.9 3.965a8 8 0 0 0-5.067 1.809 1 1 0 1 1-1.266-1.548 10 10 0 0 1 12.666 0 1 1 0 1 1-1.266 1.548 8 8 0 0 0-5.067-1.81ZM3 8a1 1 0 0 1 1 1v.01a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1m6.172 1.17a4 4 0 1 1 5.656 5.657 4 4 0 0 1-5.656-5.656ZM12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4m9-2a1 1 0 0 1 1 1v.01a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1M2.89 12.006a1 1 0 0 1 1.104.884 8 8 0 0 0 4.444 6.311A1 1 0 0 1 7.562 21a10 10 0 0 1-5.556-7.89 1 1 0 0 1 .884-1.103Zm18.22 0a1 1 0 0 1 .884 1.104 10 10 0 0 1-5.556 7.889 1 1 0 0 1-.876-1.798 8 8 0 0 0 4.444-6.311 1 1 0 0 1 1.104-.884M12 20a1 1 0 0 1 1 1v.01a1 1 0 1 1-2 0V21a1 1 0 0 1 1-1" />
	</svg>
);
const ForwardRef = forwardRef(SvgDeFi);
const Memo = memo(ForwardRef);
export default Memo;
