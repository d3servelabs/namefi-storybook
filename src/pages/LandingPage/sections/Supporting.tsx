import React from 'react';
import { cn } from '../../../utils/cn';

export interface SupportingItem {
	name: string;
	logo: string;
}

export interface SupportingProps {
	className?: string;
	items: SupportingItem[];
}

export const Supporting = ({ items = [], className }: SupportingProps) => {
	return (
		<div className={cn('w-full', className)}>
			<div className="text-brand-300 text-[10px] md:text-lg text-center md:text-left font-normal font-primary tracking-wide mb-8 md:mb-4">
				Proudly supporting
			</div>
			<div className="flex flex-wrap justify-center gap-3 p-0 md:p-2.5 items-center">
				{items.map(({ name, logo }, index) => (
					<div className="flex justify-center items-center h-15 md:h-20 w-full md:w-auto">
						<img key={index} className="w-60" src={logo} alt={name} />
					</div>
				))}
			</div>
		</div>
	);
};
