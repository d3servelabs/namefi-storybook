import React from 'react';
import { cn } from '../../../utils/cn';
import { Icon, type IconName, isIconName } from '../Icon';

export interface IconCircleButtonProps {
	icon: IconName | React.ReactElement;
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
			{typeof icon === 'string' && isIconName(icon) ? (
				<Icon icon={icon} className="block text-base text-primary-500 cursor-pointer" />
			) : (
				icon
			)}
		</button>
	);
};
