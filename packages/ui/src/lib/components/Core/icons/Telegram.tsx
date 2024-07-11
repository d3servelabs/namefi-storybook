import React, { type SVGProps, type Ref, memo, forwardRef } from 'react';

export const TelegramIcon = memo(
	forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
		<svg
			style={{
				display: 'inline-block',
				stroke: 'currentcolor',
				fill: 'currentcolor',
				width: '1em',
				height: 'auto',
				position: 'relative',
				top: '-0.15em',
			}}
			viewBox="0 0 18 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}>
			<path d="M1.43744 2.2017C1.19952 2.09596 0.920559 2.15573 0.746842 2.34966C0.573125 2.54359 0.544303 2.82742 0.67549 3.05231L4.69914 9.94999L0.67549 16.8477C0.544303 17.0726 0.573125 17.3564 0.746842 17.5503C0.920559 17.7443 1.19952 17.804 1.43744 17.6983L17.6374 10.4983C17.8541 10.402 17.9938 10.1871 17.9938 9.94999C17.9938 9.71288 17.8541 9.498 17.6374 9.4017L1.43744 2.2017ZM5.80838 9.46999L2.64856 4.05316L15.9164 9.94999L2.64856 15.8468L5.80838 10.43H10.7938C11.0589 10.43 11.2738 10.2151 11.2738 9.94999C11.2738 9.68489 11.0589 9.46999 10.7938 9.46999H5.80838Z" />
		</svg>
	)),
);
