import React from 'react';
import { cn } from '../../../utils/cn';

export interface IconCircleButtonProps {
	icon: React.ReactNode;
	onClick?: () => void;
	disabled?: boolean;
	className?: string;
}

export const IconCircleButton = ({ icon, onClick, disabled, className }: IconCircleButtonProps) => {
	return (
		<button
			className={cn(
				'transition flex justify-center items-center w-7 h-7 rounded-full bg-[#48E59B33] cursor-pointer',
				className,
				disabled && 'opacity-30',
			)}
			onClick={onClick}>
			<div className="text-base text-primary-500 stroke-[0.02] cursor-point">{icon}</div>
		</button>
	);
};
