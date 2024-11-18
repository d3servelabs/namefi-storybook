import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const SvgWarning = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		fill="currentColor"
		viewBox="0 0 24 24"
		ref={ref}
		{...props}>
		<path d="M20 12a8 8 0 1 0-16 0 8 8 0 0 0 16 0m2 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-10.117 3.007L12.01 15l.117.007a1 1 0 0 1 0 1.986L12 17l-.117-.007a1 1 0 0 1 0-1.986m-.547-7.754a1 1 0 0 1 1.657.63L13 8v4l-.007.117a1 1 0 0 1-1.986 0L11 12V8l.007-.117a1 1 0 0 1 .329-.63" />
	</svg>
);
const ForwardRef = forwardRef(SvgWarning);
const Memo = memo(ForwardRef);
export default Memo;
