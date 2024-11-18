import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const SvgLock = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		fill="currentColor"
		viewBox="0 0 24 24"
		ref={ref}
		{...props}>
		<path d="M12 2a5 5 0 0 0-5 5v3.01a3.25 3.25 0 0 0-3 3.24v5.5A3.25 3.25 0 0 0 7.25 22h9.5A3.25 3.25 0 0 0 20 18.75v-5.5a3.25 3.25 0 0 0-3-3.24V7a5 5 0 0 0-5-5m3 8H9V7a3 3 0 1 1 6 0zm-7.75 2h9.5c.69 0 1.25.56 1.25 1.25v5.5c0 .69-.56 1.25-1.25 1.25h-9.5C6.56 20 6 19.44 6 18.75v-5.5c0-.69.56-1.25 1.25-1.25M12 14a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1" />
	</svg>
);
const ForwardRef = forwardRef(SvgLock);
const Memo = memo(ForwardRef);
export default Memo;
