import React, { type SVGProps, type Ref, memo, forwardRef } from 'react';

export const MenuIcon = memo(
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
			<path d="M1.61538 4.4115C1.27552 4.4115 1 4.68702 1 5.02688C1 5.36675 1.27552 5.64227 1.61538 5.64227H16.3846C16.7245 5.64227 17 5.36675 17 5.02688C17 4.68702 16.7245 4.4115 16.3846 4.4115H1.61538Z" />
			<path d="M1 9.94996C1 9.61009 1.27552 9.33458 1.61538 9.33458H16.3846C16.7245 9.33458 17 9.61009 17 9.94996C17 10.2898 16.7245 10.5653 16.3846 10.5653H1.61538C1.27552 10.5653 1 10.2898 1 9.94996Z" />
			<path d="M1 14.873C1 14.5332 1.27552 14.2577 1.61538 14.2577H16.3846C16.7245 14.2577 17 14.5332 17 14.873C17 15.2129 16.7245 15.4884 16.3846 15.4884H1.61538C1.27552 15.4884 1 15.2129 1 14.873Z" />
		</svg>
	)),
);
