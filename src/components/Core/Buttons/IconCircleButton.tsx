import React from 'react';
import { cn } from '../../../utils/cn';

export interface IconCircleButtonProps {
	iconSource: string;
	onClick?: () => void;
	disabled?: boolean;
	className?: string;
}

export const IconCircleButton = ({ iconSource, onClick, disabled, className }: IconCircleButtonProps) => {
	return (
		<button
			className={cn(
				'transition flex justify-center items-center w-7 h-7 rounded-full bg-[#48E59B33] cursor-pointer',
				className,
				disabled && 'opacity-30',
			)}
			onClick={onClick}>
			<img className="block w-[16px] cursor-pointer" src={iconSource} alt="Download" role="img" />
		</button>
	);
};
