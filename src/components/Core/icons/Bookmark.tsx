import React, { SVGProps } from 'react';

export const BookmarkIcon = (props: SVGProps<SVGSVGElement>) => (
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
		<path d="M3.40625 3.99998C3.40625 3.55815 3.76442 3.19998 4.20625 3.19998H13.8063C14.2481 3.19998 14.6063 3.55815 14.6063 3.99998V17.2C14.6063 17.4908 14.4484 17.7587 14.1941 17.8997C13.9397 18.0407 13.6289 18.0325 13.3823 17.8784L9.00625 15.1434L4.63025 17.8784C4.38363 18.0325 4.0728 18.0407 3.81844 17.8997C3.56407 17.7587 3.40625 17.4908 3.40625 17.2V3.99998ZM5.00625 4.79998V15.7566L8.15825 13.7866C8.67708 13.4623 9.33542 13.4623 9.85425 13.7866L13.0063 15.7566V4.79998H5.00625Z" />
	</svg>
);
