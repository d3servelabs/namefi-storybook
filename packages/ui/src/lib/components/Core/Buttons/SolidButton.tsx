import React from 'react';
import { Button, ButtonProps } from './Button';
import { cn } from '../../../utils/cn';

export const SolidButton = ({ disabled, className, children, ...props }: ButtonProps) => {
	return (
		<Button
			disabled={disabled}
			{...props}
			className={cn(
				'bg-primary-500 text-primary-dark ring-0 hover:bg-primary-80 disabled:bg-[#797979] disabled:hover:bg-[#797979]',
				className,
			)}>
			{children}
		</Button>
	);
};
