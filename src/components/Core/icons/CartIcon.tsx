import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const SvgCartIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" ref={ref} {...props}>
		<path
			fill="#48E59B"
			d="M9.345 1.142 2.888.012a1.693 1.693 0 0 0-.564 3.337l5.255.925 4.86 29.734a1.69 1.69 0 0 0 1.693 1.422h26.121a1.693 1.693 0 0 0 0-3.386H15.548l-.71-4.346h25.274a1.69 1.69 0 0 0 1.614-1.174l4.516-14.11a1.694 1.694 0 0 0-1.614-2.213H11.98l-1.253-7.677a1.69 1.69 0 0 0-1.383-1.382m32.963 12.457L38.853 24.31h-24.57l-1.749-10.724zM18.865 41.917a5.486 5.486 0 1 0-10.972 0 5.486 5.486 0 0 0 10.971 0m-7.586 0a2.1 2.1 0 1 1 2.1 2.1 2.1 2.1 0 0 1-2.095-2.1zM39.419 41.917a5.486 5.486 0 1 0-10.972 0 5.486 5.486 0 0 0 10.972 0m-7.609 0a2.1 2.1 0 1 1 4.2 0 2.1 2.1 0 0 1-4.2 0"
		/>
	</svg>
);
const ForwardRef = forwardRef(SvgCartIcon);
const Memo = memo(ForwardRef);
export default Memo;
