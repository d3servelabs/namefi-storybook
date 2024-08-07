import React from 'react';
import { css, keyframes } from '@emotion/css';
import  { cn }  from "@namefi/utils"
import ScrollDownSVG from '../../../../assets/ScrollDown.svg';

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
		<div className={className}>
			<div className="flex justify-center gap-3">
				<img
					src={ScrollDownSVG}
					alt="Scroll Down"
					className={cn('w-[12px] md:w-[18px]', animation)}
				/>
				<div className="text-xs md:text-xl font-semibold text-[#fff]">
					{children}
				</div>
				<img
					src={ScrollDownSVG}
					alt="Scroll Down"
					className={cn('w-[12px] md:w-[18px]', animation)}
				/>
			</div>
		</div>
	);
};
