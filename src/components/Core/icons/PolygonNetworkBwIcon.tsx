import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const SvgPolygonNetworkBwIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 42 42" ref={ref} {...props}>
		<g clipPath="url(#PolygonNetworkBWIcon_svg__a)">
			<circle cx={21} cy={21} r={21} fill="#313131" />
			<path
				fill="#FCFBFE"
				fillRule="evenodd"
				d="M14.11 9.297a2.8 2.8 0 0 1 1.093.11 133 133 0 0 1 6.344 3.5q.394.295.547.765a6.3 6.3 0 0 1-.11 2.844l-2.187 1.312q-.27-1.188-.328-2.406a6.5 6.5 0 0 0-.547-.985l-3.719-1.968a1.42 1.42 0 0 0-1.094 0q-2.161 1.052-4.046 2.515a26.5 26.5 0 0 0 0 4.813q.121.3.328.547a25.4 25.4 0 0 0 4.375 2.297 465 465 0 0 0 11.812-6.453.93.93 0 0 1 .875 0 108 108 0 0 1 6.89 4.046 75 75 0 0 1 0 8.094 40.4 40.4 0 0 1-7.327 4.156 40.5 40.5 0 0 1-5.032-2.515 8.1 8.1 0 0 1-2.297-1.64 10.8 10.8 0 0 1 0-3.063 23 23 0 0 1 2.297-1.313q.202 1.556.547 3.063a34 34 0 0 0 3.828 2.297q.657.218 1.313 0l3.719-2.297.328-.657a22 22 0 0 0 0-4.375 18.5 18.5 0 0 0-4.266-2.734 1.42 1.42 0 0 0-1.094 0 386 386 0 0 1-10.718 6.125 3.55 3.55 0 0 1-1.75 0 95 95 0 0 1-6.453-3.828 75 75 0 0 1 0-8.094q.273-.492.765-.765a58 58 0 0 0 5.906-3.391"
				clipRule="evenodd"
			/>
		</g>
		<defs>
			<clipPath id="PolygonNetworkBWIcon_svg__a">
				<path fill="#fff" d="M0 0h42v42H0z" />
			</clipPath>
		</defs>
	</svg>
);
const ForwardRef = forwardRef(SvgPolygonNetworkBwIcon);
const Memo = memo(ForwardRef);
export default Memo;
