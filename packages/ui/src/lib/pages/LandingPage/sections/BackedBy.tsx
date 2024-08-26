import React from 'react';
import { cn } from '../../../utils/cn';

export interface BackerItem {
	name: string;
	logo: string;
}
export interface BackedByProps {
	items: BackerItem[];
	className?: string;
}
export const BackedBy = ({ items = [], className }: BackedByProps) => {
	return (
		<div
			id="backed-by"
			className={cn(
				'w-full bg-[#121212] rounded-5 pt-3 md:pt-6 pb-6 md:pb-15 px-5 md:px-12',
				className,
			)}>
			<div className="text-brand-300 text-[10px] md:text-base font-primary font-normal tracking-wide mb-3 md:mb-4">
				Backed by
			</div>
			<div className="w-full grid grid-cols-[repeat(auto-fit,120px)] md:grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-2 lg:gap-12 items-center justify-around">
				{items.map(({ name, logo }, index) => (
					<img
						key={index}
						className="max-w-full transition grayscale hover:grayscale-0 mx-auto"
						src={logo}
						alt={name}
					/>
				))}
			</div>
		</div>
	);
};
