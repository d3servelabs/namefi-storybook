// Although this file is basically the same as the components under `ParkingMode`, there are significant differences in the responsive design of `ParkingMode`, so we treat them as different components in this moment.

import React from 'react';
import { css, keyframes } from '@emotion/css';
import  { cn }  from "@namefi/utils"
import ScrollDownSVG from '../../../assets/ScrollDown.svg';

const bounce = keyframes`
  from, 80%, to {
    opacity: 0;
  }
	20%, 60% {
		opacity: 1;
	}
	from {
		transform: translateY(-15%);
	}
	80% {
		transform: translateY(35%);
	}
`;

const animation = css`
	animation: ${bounce} 2.4s ease-out infinite;
`;

export interface ScrollDownTipProps {
	children: React.ReactNode;
	className?: string;
}

export const ScrollDownTip = ({ children, className }: ScrollDownTipProps) => {
	return (
		<div className={cn('text-sm font-semibold text-white', className)}>
			<div className="flex justify-center gap-3">
				<img
					src={ScrollDownSVG}
					alt="Scroll Down"
					className={cn('w-4', animation)}
				/>
				<span>
					{children}
				</span>
				<img
					src={ScrollDownSVG}
					alt="Scroll Down"
					className={cn('w-4', animation)}
				/>
			</div>
		</div>
	);
};
