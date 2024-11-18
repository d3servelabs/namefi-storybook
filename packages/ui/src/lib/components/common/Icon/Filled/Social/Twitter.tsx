import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const SvgTwitter = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		fill="currentColor"
		viewBox="0 0 24 24"
		ref={ref}
		{...props}>
		<path d="M17.031 4.07h2.684l-5.863 6.717 6.898 9.143h-5.4l-4.232-5.544L6.28 19.93H3.594l6.27-7.188-6.614-8.67h5.537l3.82 5.066zm-.944 14.25h1.488l-9.6-12.724H6.38z" />
	</svg>
);
const ForwardRef = forwardRef(SvgTwitter);
const Memo = memo(ForwardRef);
export default Memo;
