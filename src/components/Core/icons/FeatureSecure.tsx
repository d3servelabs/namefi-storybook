import React, { type SVGProps, type Ref, memo, forwardRef } from 'react';

export const FeatureSecureIcon = memo(
	forwardRef((props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
		<svg
			ref={ref}
			style={{
				display: 'inline-block',
				stroke: 'currentcolor',
				strokeWidth: '0.1',
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
			<path d="M16.2064 2.79397L6.50722 2.00253C6.28832 1.98569 6.05258 2.05304 5.88419 2.2046C5.7158 2.35615 5.59793 2.55822 5.58109 2.79397L5.48006 4.09058H13.2764C14.2194 4.09058 14.994 4.86519 14.994 5.80818V10.9273L15.5496 10.9778C15.5665 10.9778 15.6002 10.9778 15.617 10.9778C15.8191 10.9778 16.0211 10.9105 16.1727 10.7757C16.3411 10.6242 16.4589 10.4221 16.4758 10.1864L16.9978 3.72012C17.0315 3.24863 16.6778 2.82765 16.2064 2.79397Z" />
			<path d="M10.5838 10.7589C10.7354 10.9946 10.9879 11.1462 11.2742 11.1462C11.7288 11.1462 12.0993 10.7757 12.0993 10.3211C12.0993 9.8664 11.7288 9.49594 11.2742 9.49594C10.9879 9.49594 10.7354 9.64749 10.6006 9.8664C10.4491 9.63065 10.1965 9.4791 9.91026 9.4791C9.45561 9.4791 9.08516 9.84956 9.08516 10.3042C9.08516 10.7589 9.45561 11.1293 9.91026 11.1293C10.1965 11.1293 10.4491 10.9778 10.5838 10.7589Z" />
			<path d="M13.2757 4.94934H3.54291C3.07143 4.94934 2.68413 5.33664 2.68413 5.80814V9.4454C2.85252 9.39489 3.03775 9.37805 3.20614 9.37805C3.32401 9.37805 3.42504 9.39489 3.54291 9.41172V8.33402H13.2757V12.3081H6.01821C6.13608 12.527 6.20344 12.7796 6.20344 13.049V13.1669H13.2757C13.7472 13.1669 14.1345 12.7796 14.1345 12.3081V5.80814C14.1345 5.33664 13.7472 4.94934 13.2757 4.94934ZM3.54291 6.83533V5.80814H13.2757V6.83533H3.54291Z" />
			<path d="M4.67085 12.1902V11.6008C4.67085 10.7926 4.01414 10.1358 3.20588 10.1358C2.41446 10.1527 1.75774 10.8094 1.75774 11.6008V12.1734C1.33678 12.2239 1 12.5944 1 13.0322V14.9182C1 15.3897 1.38729 15.7938 1.87562 15.7938H4.56982C5.04131 15.7938 5.44544 15.4065 5.44544 14.9182V13.049C5.4286 12.5944 5.09182 12.2407 4.67085 12.1902ZM2.49865 11.6008C2.49865 11.1967 2.81859 10.8768 3.22272 10.8768C3.62685 10.8768 3.94679 11.1967 3.94679 11.6008V12.1734H2.49865V11.6008ZM4.11517 13.7731L3.27323 14.6151C3.22272 14.6656 3.13852 14.6993 3.07117 14.6993C3.00381 14.6993 2.91962 14.6656 2.8691 14.6151L2.33026 14.093C2.21239 13.9752 2.21239 13.7899 2.33026 13.6721C2.44813 13.5542 2.63336 13.5542 2.75123 13.6721L3.07117 13.992L3.71104 13.3521C3.82891 13.2342 4.01414 13.2342 4.13201 13.3521C4.23305 13.47 4.23304 13.6552 4.11517 13.7731Z" />
		</svg>
	)),
);
