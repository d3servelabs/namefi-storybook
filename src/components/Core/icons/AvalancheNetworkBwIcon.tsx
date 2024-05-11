import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const SvgAvalancheNetworkBwIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 42 42" ref={ref} {...props}>
		<circle cx={21} cy={21} r={21} fill="#313131" />
		<path
			fill="#fff"
			fillRule="evenodd"
			d="M16.192 27.807h-3.533c-.741 0-1.107 0-1.329-.143a.91.91 0 0 1-.41-.703c0-.267.173-.588.539-1.231l8.715-15.384c.371-.653.559-.989.796-1.103a.9.9 0 0 1 .815 0c.237.124.425.45.796 1.103l1.793 3.131c.294.444.527.925.692 1.43.099.41.099.837 0 1.247-.166.51-.4.996-.697 1.444L19.79 25.7a5.7 5.7 0 0 1-.89 1.336c-.306.295-.679.512-1.086.633a6.3 6.3 0 0 1-1.621.138M25.106 27.807h5.06c.746 0 1.122 0 1.349-.148a.9.9 0 0 0 .405-.708c0-.257-.168-.564-.494-1.172l-.035-.064-2.534-4.338-.03-.05c-.356-.603-.534-.91-.766-1.024a.87.87 0 0 0-.81 0c-.232.119-.42.436-.79 1.079l-2.526 4.338c-.37.638-.553.96-.538 1.221a.9.9 0 0 0 .405.708c.183.158.558.158 1.304.158"
			clipRule="evenodd"
		/>
	</svg>
);
const ForwardRef = forwardRef(SvgAvalancheNetworkBwIcon);
const Memo = memo(ForwardRef);
export default Memo;
