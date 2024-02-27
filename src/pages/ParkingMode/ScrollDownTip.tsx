import React from 'react';
import { cn } from '../../utils/cn'

export interface ScrollDownTipProps {
	children: React.ReactNode;
	className?: string;
}

export const ScrollDownTip = ({  children, className }: ScrollDownTipProps) => {
	return (
		<div className={cn('flex justify-center gap-3', className)}>
			<img src="/assets/ScrollDown.svg" alt="Scroll Down" className="w-[18px]" />
			<div className="text-xl font-semibold text-[#fff]">{children}</div>
			<img src="/assets/ScrollDown.svg" alt="Scroll Down" className="w-[18px]" />
		</div>
	);
};
