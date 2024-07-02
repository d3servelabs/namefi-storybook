import * as React from 'react';
import type { ComponentProps, SVGProps } from 'react';
import { Ref, forwardRef, memo } from 'react';

type Props = SVGProps<SVGSVGElement> & {
	firstPath?: ComponentProps<'path'>;
	secondPath?: ComponentProps<'path'>;
};
const SvgCustomLoader = (props: Props, ref: Ref<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 121 120" ref={ref} {...props}>
		<path stroke="#C6EEDB" strokeWidth={4} {...props.firstPath} d="M36.437 35.785h50v50h-50z" />
		<path
			stroke="#48E59B"
			strokeWidth={4}
			{...props.secondPath}
			d="M60.659 25.754 96.014 61.11 60.659 96.464 25.304 61.11z"
		/>
	</svg>
);
const ForwardRef = forwardRef(SvgCustomLoader);
const Memo = memo(ForwardRef);
export default Memo;
