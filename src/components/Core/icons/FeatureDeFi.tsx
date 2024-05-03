import React, { type SVGProps, type Ref, memo, forwardRef } from 'react';

export const FeatureDeFiIcon = memo(
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
			viewBox="0 0 19 19"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}>
			<path d="M16.2888 7.04839H19V3.37097H15.3226V3.90818L10.6909 1.49947L11.6452 0H7.35484L8.31986 1.51632L3.86405 3.92994C3.47302 3.4056 2.84969 3.06452 2.14516 3.06452C0.960419 3.06452 0 4.02494 0 5.20968C0 6.39442 0.960419 7.35484 2.14516 7.35484C2.46602 7.35484 2.7691 7.28252 3.04245 7.15626L4.42547 9.28824L2.86502 11.9538L2.14516 11.6452L0 12.5645V15.0161L2.14516 15.9355L4.29032 15.0161V14.922L7.18016 16.0057C7.09865 16.1699 7.04839 16.3526 7.04839 16.5484C7.04839 17.2253 7.59724 17.7742 8.27419 17.7742C8.27419 18.4511 8.82305 19 9.5 19C10.177 19 10.7258 18.4511 10.7258 17.7742C11.4028 17.7742 11.9516 17.2253 11.9516 16.5484C11.9516 16.3731 11.9136 16.2073 11.8471 16.0562L15.2567 14.8703L15.0333 16.2419L16.5484 15.4044L18.0635 16.2419L17.7742 14.4679L19 13.2114L17.3059 12.9525L16.5484 11.3387L16.0124 12.4802L14.493 9.70594L16.2888 7.04839ZM14.162 9.101L13.4011 7.71124L15.3226 6.61323V7.04839H15.549L14.162 9.101ZM15.1265 14.2669L11.4343 15.5509C11.2342 15.4084 10.9906 15.3226 10.7258 15.3226C10.7258 15.3103 10.7227 15.2993 10.7221 15.287L12.8324 12.164L14.444 13.1584L14.0968 13.2114L15.1265 14.2669ZM9.80645 2.88953L9.94344 2.6741L12.5743 7.47803L9.80645 9.05963V2.88953ZM9.19355 2.88953V9.19876L6.251 7.38303L9.03082 2.63395L9.19355 2.88953ZM8.76513 9.65445L6.30524 11.0601L5.14532 9.27169L5.94118 7.91197L8.76513 9.65445ZM9.19355 10.1157V14.1403C8.94226 14.2053 8.72468 14.3478 8.56318 14.5411L6.63958 11.5753L9.19355 10.1157ZM10.4641 14.5739C10.3005 14.3637 10.0718 14.2089 9.80645 14.1403V10.2971L12.3102 11.8419L10.4641 14.5739ZM9.96519 9.67468L12.8688 8.01555L13.7762 9.67223L12.6537 11.3335L9.96519 9.67468ZM15.3226 4.59892V5.90747L13.1066 7.17373L10.3191 2.08356L10.3605 2.0186L15.3226 4.59892ZM8.6499 2.03484L8.66124 2.05261L5.72942 7.06095L4.11289 6.06345C4.22658 5.80174 4.29032 5.51337 4.29032 5.20968C4.29032 4.94889 4.2416 4.70005 4.1561 4.46898L8.6499 2.03484ZM3.55637 6.82253C3.64003 6.74929 3.7191 6.67053 3.7905 6.58503L5.41929 7.59019L4.77176 8.69648L3.55637 6.82253ZM4.79873 9.86376L5.77232 11.3648L3.93729 12.4134L3.43287 12.1971L4.79873 9.86376ZM4.29032 12.9175L6.10636 11.8799L8.28277 15.2355C8.28094 15.2647 8.27419 15.2925 8.27419 15.3226C8.0324 15.3226 7.80869 15.3949 7.61869 15.5156L4.29032 14.2675V12.9175ZM15.5895 12.9834L15.3799 13.0156L13.1759 11.6559L14.1075 10.2772L15.5895 12.9834Z" />
		</svg>
	)),
);
