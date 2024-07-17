// Although this file is basically the same as the components under `ParkingMode`, there are significant differences in the responsive design of `ParkingMode`, so we treat them as different components in this moment.

import React from 'react';
import ScrollDownSVG from '../../../assets/ScrollDown.svg';
import styles from './styles.module.css';
import  { cn }  from "@namefi/utils"

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
					className={cn('w-4', styles.bounceAnimation)}
				/>
				<span>{children}</span>
				<img
					src={ScrollDownSVG}
					alt="Scroll Down"
					className={cn('w-4', styles.bounceAnimation)}
				/>
			</div>
		</div>
	);
};
