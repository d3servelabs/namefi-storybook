import React from 'react';
import  { cn }  from "@namefi/utils"

export interface PoweredByItem {
	name: string;
	logo: string;
}
export interface PoweredByProps {
	items: PoweredByItem[];
	className?: string;
}

export const PoweredBy = ({ items, className }: PoweredByProps) => {
	return (
		<div id="powered-by" className={cn('w-full', className)}>
			<div className="text-brand-300 text-[10px] md:text-lg font-normal font-primary tracking-wide mb-3">
				Powered by
			</div>
			<div className="min-h-[142px] grid grid-cols-2 md:grid-cols-4 md:gap-x-16 justify-items-center place-content-around">
				{items.map(({ name, logo }, index) => (
					<div
						className="flex justify-center items-center h-14 md:h-36 max-w-[132px] md:max-w-[264px]"
						key={index}>
						<img src={logo} alt={name} />
					</div>
				))}
			</div>
		</div>
	);
};
