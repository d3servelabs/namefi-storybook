import React from 'react';
import { cn } from '../../../utils/cn';

export interface CardProps {
	children?: React.ReactNode;
	className?: string;
}

export const Card = ({ children, className }: CardProps) => {
	return (
		<div
			className={cn(
				'flex h-full w-full flex-col overflow-hidden rounded-5 bg-[#222B27] px-9 pb-12 pt-6 text-black-500',
				className,
			)}>
			{children}
		</div>
	);
};
