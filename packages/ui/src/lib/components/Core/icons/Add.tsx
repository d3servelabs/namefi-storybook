import React, { SVGProps } from 'react';

export const AddIcon = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M9.8 4.3C9.8 3.85817 9.44183 3.5 9 3.5C8.55817 3.5 8.2 3.85817 8.2 4.3V9.2H3.3C2.85817 9.2 2.5 9.55817 2.5 10C2.5 10.4418 2.85817 10.8 3.3 10.8H8.2V15.7C8.2 16.1418 8.55817 16.5 9 16.5C9.44183 16.5 9.8 16.1418 9.8 15.7V10.8H14.7C15.1418 10.8 15.5 10.4418 15.5 10C15.5 9.55817 15.1418 9.2 14.7 9.2H9.8V4.3Z" />
	</svg>
);
