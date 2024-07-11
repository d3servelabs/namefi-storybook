import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const SvgAvalancheNetwork = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 49 48" ref={ref} {...props}>
		<circle cx={24.786} cy={24} r={24} fill="#E84142" />
		<path
			fill="#fff"
			fillRule="evenodd"
			d="M19.29 31.78h-4.037c-.847 0-1.265 0-1.519-.164a1.05 1.05 0 0 1-.468-.803c0-.305.197-.673.615-1.408l9.961-17.58c.424-.747.638-1.131.91-1.261a1.04 1.04 0 0 1 .931 0c.271.141.486.514.91 1.26l2.05 3.579a6.8 6.8 0 0 1 .79 1.633c.113.469.113.957 0 1.425a6.8 6.8 0 0 1-.797 1.65l-5.234 9.26a6.5 6.5 0 0 1-1.017 1.527 3 3 0 0 1-1.242.723 7.2 7.2 0 0 1-1.852.159M29.479 31.78h5.782c.853 0 1.282 0 1.542-.17a1.02 1.02 0 0 0 .463-.808c0-.294-.192-.645-.565-1.34l-.04-.074-2.896-4.958-.034-.056c-.407-.69-.61-1.04-.876-1.17a.99.99 0 0 0-.926 0c-.265.135-.48.497-.903 1.232l-2.886 4.958c-.423.73-.632 1.097-.615 1.396a1.02 1.02 0 0 0 .463.809c.209.18.638.18 1.49.18"
			clipRule="evenodd"
		/>
	</svg>
);
const ForwardRef = forwardRef(SvgAvalancheNetwork);
const Memo = memo(ForwardRef);
export default Memo;
