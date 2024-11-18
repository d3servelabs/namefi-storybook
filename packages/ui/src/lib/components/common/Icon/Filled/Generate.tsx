import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const SvgGenerate = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		fill="currentColor"
		viewBox="0 0 24 24"
		ref={ref}
		{...props}>
		<path d="M11.876 5.596a.941.941 0 0 0-1.752 0l-1.096 2.78a4.7 4.7 0 0 1-2.651 2.652l-2.781 1.096a.941.941 0 0 0 0 1.752l2.78 1.096a4.7 4.7 0 0 1 2.652 2.651l1.096 2.781a.941.941 0 0 0 1.752 0l1.096-2.78a4.7 4.7 0 0 1 2.651-2.652l2.781-1.096a.941.941 0 0 0 0-1.752l-2.78-1.096a4.7 4.7 0 0 1-2.652-2.651zm6.822-2.121a.75.75 0 0 0-1.396 0l-.517 1.31-1.31.517a.75.75 0 0 0 0 1.396l1.31.517.517 1.31a.75.75 0 0 0 1.396 0l.517-1.31 1.31-.517a.75.75 0 0 0 0-1.396l-1.31-.517z" />
	</svg>
);
const ForwardRef = forwardRef(SvgGenerate);
const Memo = memo(ForwardRef);
export default Memo;
