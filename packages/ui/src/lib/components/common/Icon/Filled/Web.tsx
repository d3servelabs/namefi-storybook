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
		<path d="M9.492 3.355a9.01 9.01 0 0 0-6.456 7.841H7.15a20.3 20.3 0 0 1 2.34-7.842zM7.15 12.804H3.036a9.01 9.01 0 0 0 6.454 7.842 20.3 20.3 0 0 1-2.34-7.842m4.403 8.186a18.6 18.6 0 0 1-2.79-8.186h6.473a18.6 18.6 0 0 1-2.79 8.186 9 9 0 0 1-.893 0m2.957-.345a9.01 9.01 0 0 0 6.454-7.841H16.85a20.3 20.3 0 0 1-2.34 7.842Zm2.34-9.449h4.114a9.01 9.01 0 0 0-6.454-7.842 20.3 20.3 0 0 1 2.34 7.842M11.553 3.01a10 10 0 0 1 .894 0 18.6 18.6 0 0 1 2.79 8.186H8.763a18.6 18.6 0 0 1 2.789-8.186Z" />
	</svg>
);
const ForwardRef = forwardRef(SvgWeb);
const Memo = memo(ForwardRef);
export default Memo;
