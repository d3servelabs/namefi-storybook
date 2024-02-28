import React from 'react';
import { cn } from '@utils/cn';

export interface CardProps {
	children?: React.ReactNode;
	className?: string;
}
export const Card = ({ children, className }: CardProps) => {
	return (
		<div
			className={cn(
				'w-full h-full rounded-5 bg-[#222B27] text-black-500 pt-6 pb-12 px-9 overflow-hidden flex flex-col',
				className,
			)}>
			{children}
		</div>
	);
};
