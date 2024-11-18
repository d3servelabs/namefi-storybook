import * as React from 'react';
import type { SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';
const SvgShare = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="1em"
		height="1em"
		fill="currentColor"
		viewBox="0 0 24 24"
		ref={ref}
		{...props}>
		<path d="M14.214 9.451a3.88 3.88 0 1 0-.895-1.789L9.786 9.43a3.88 3.88 0 1 0 0 5.142l3.533 1.766a3.88 3.88 0 1 0 .895-1.788l-3.533-1.767a3.9 3.9 0 0 0 0-1.565l3.533-1.766ZM17.12 5a1.88 1.88 0 1 1-1.607 2.856 1 1 0 0 0-.139-.276A1.88 1.88 0 0 1 17.12 5m-8.633 6.024a1 1 0 0 0 .139.277 1.88 1.88 0 0 1 0 1.399 1 1 0 0 0-.139.276A1.879 1.879 0 0 1 5 12a1.88 1.88 0 0 1 3.487-.976m6.887 5.397a1 1 0 0 0 .139-.277A1.88 1.88 0 0 1 19 17.12a1.88 1.88 0 1 1-3.626-.7Z" />
	</svg>
);
const ForwardRef = forwardRef(SvgShare);
const Memo = memo(ForwardRef);
export default Memo;
