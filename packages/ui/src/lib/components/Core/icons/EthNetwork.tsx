import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const SvgEthNetwork = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 49 48" ref={ref} {...props}>
		<circle cx={24.786} cy={24} r={24} fill="#617DEA" />
		<path fill="#fff" fillOpacity={0.6} d="M25.266 8.64v10.784l9.114 4.074z" />
		<path fill="#fff" d="m25.265 8.64-9.12 14.858 9.12-4.074z" />
		<path fill="#fff" fillOpacity={0.6} d="M25.266 30.488v7.329l9.12-12.623z" />
		<path fill="#fff" d="M25.265 37.817v-7.334l-9.12-5.284z" />
		<path fill="#fff" fillOpacity={0.2} d="m25.266 28.792 9.114-5.284-9.114-4.073z" />
		<path fill="#fff" fillOpacity={0.6} d="m16.146 23.498 9.12 5.283v-9.357z" />
	</svg>
);
const ForwardRef = forwardRef(SvgEthNetwork);
const Memo = memo(ForwardRef);
export default Memo;
