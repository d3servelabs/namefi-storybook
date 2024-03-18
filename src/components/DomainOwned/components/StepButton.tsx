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
				'border-white text-white text-lg',
				loading && 'opacity-60',
				disabled && 'opacity-30',
				className,
			)}
			disabled={disabled || loading}
			onClick={onClick}>
			{children}
			{(loading || icon) && (
				<div className="text-primary-500">
					{loading ? <RefreshIcon className="animate-spin" /> : icon}
				</div>
			)}
		</Button>
	);
};
