import React from 'react';
import  { cn }  from "@namefi/utils"

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
				'transition flex justify-center items-center w-auto h-auto p-[0.375em] aspect-square overflow-hidden rounded-full bg-[#48E59B33] cursor-pointer text-base',
				className,
				disabled && 'opacity-30',
			)}
			onClick={onClick}>
			<div className="text-primary-500 stroke-[0.02] cursor-point">{icon}</div>
		</button>
	);
};
