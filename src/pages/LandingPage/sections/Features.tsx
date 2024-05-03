import React from 'react';
import { NamefiBrandText } from '../../../components/Core/NamefiBrandText';
import { FeatureCard, type FeatureCardProps } from '../components/FeatureCard';
import { cn } from '../../../utils/cn';

export interface FeatureProps {
	items: FeatureCardProps[];
	className?: string;
}

export const Features = ({ items, className }: FeatureProps) => {
	return (
		<div className={cn('relative w-full pl-14 md:pl-45', className)}>
			<div className="absolute z-10 top-6 md:top-12 left-0 md:left-12 font-bold tracking-wider flex items-center justify-start text-primary-500">
				<NamefiBrandText className="text-2xl md:text-5xl">
					Namefi
				</NamefiBrandText>
				<span className="ml-[0.5em] text-lg md:text-4xl">Features</span>
			</div>
			<div className="rounded-5 bg-[#121212] p-9 md:p-15">
				<div className="w-full pt-13 md:pt-39 grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
					{items.map((item, index) => {
						return <FeatureCard key={index} {...item} className="h-full" />;
					})}
				</div>
			</div>
		</div>
	);
};
