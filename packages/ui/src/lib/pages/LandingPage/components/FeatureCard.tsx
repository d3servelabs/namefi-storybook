import React from 'react';
import  { cn }  from "@namefi/utils"

export interface FeatureCardProps {
	icon: React.ReactNode;
	title: React.ReactNode;
	description: React.ReactNode;
	className?: string;
}

export const FeatureCard = ({ icon, title, description, className }: FeatureCardProps) => {
	return (
		<div
			className={cn(
				'max-w-full px-5 py-6 md:px-9 md:py-10 bg-[#e7e7e7] hover:bg-white text-black-600 rounded-3xl',
				className,
			)}>
			<div className="mt-10 md:mt-16 mb-2.5 md:mb-4.5 text-black-brand text-[56px] md:text-[100px]">{icon}</div>
			<div className="text-black text-xl md:text-4xl font-bold tracking-wider mb-7 md:mb-12">{title}</div>
			<div className="text-xs md:text-xl font-medium tracking-wide leading-loose">{description}</div>
		</div>
	);
};
