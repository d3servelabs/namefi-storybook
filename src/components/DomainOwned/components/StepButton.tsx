import React from 'react';
import { Button } from '../../../components';
import { RefreshIcon } from '../../../components/Core/icons/Refresh';
import { cn } from '../../../utils/cn';

export interface StepButtonProps {
	children?: React.ReactNode;
	icon?: React.ReactNode;
	loading?: boolean;
	disabled?: boolean;
	onClick?: () => void;
	className?: string;
}

export const StepButton = ({
	children,
	icon,
	loading,
	disabled,
	onClick,
	className,
}: StepButtonProps) => {
	return (
		<Button
			className={cn(
				'transition border-white text-white text-lg font-primary',
				loading && 'opacity-60',
				disabled && 'opacity-30',
				className,
			)}
			disabled={disabled || loading}
			onClick={onClick}>
			{children}
			{(loading || icon) && (
				<div className={disabled ? 'text-white' : 'text-primary-500'}>
					{loading ? <RefreshIcon className="animate-spin" /> : icon}
				</div>
			)}
		</Button>
	);
};
