import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const SvgTokenIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" ref={ref} {...props}>
		<circle cx={32} cy={32} r={32} fill="#48E59B" />
		<path
			fill="#111"
			d="M14.399 19.551h35.2c.586 0 1.066.48 1.066 1.067V43.07a1.07 1.07 0 0 1-1.066 1.067h-35.2a1.07 1.07 0 0 1-1.067-1.067V20.618c0-.587.48-1.067 1.067-1.067m28.426 2.134v3.893h5.707v-3.893zm-2.133 0H15.465v3.893h25.227z"
		/>
	</svg>
);
const ForwardRef = forwardRef(SvgTokenIcon);
const Memo = memo(ForwardRef);
export default Memo;
