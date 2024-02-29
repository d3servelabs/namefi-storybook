import React from 'react';
import { cn } from '../../utils/cn';

export interface ParkingModeFooterLink {
	text: string;
	href?: string;
}

export interface ParkingModeFooterProps {
	children: React.ReactNode;
	links: ParkingModeFooterLink[];
	className?: string;
}

export const ParkingModeFooter = ({ children, links, className }: ParkingModeFooterProps) => {
	return (
		<div className={cn('border-t-[0.75px] border-[#A5A5A5] pt-8 pb-10', className)}>
			<div className="flex flex-col-reverse sm:flex-row gap-6 sm:gap-12 justify-between items-center px-12 max-w-[1488px] mx-auto">
				<div className="text-[6px] md:text-[8px] lg:text-base text-black-400">{children}</div>
				<div className="flex flex-col sm:flex-row gap-3 sm:gap-12 text-center sm:text-left text-[8px] md:text-[10px] xl:text-lg text-[#d6d6d6]">
					{links.map((link, index) => (
						<a key={index} href={link.href} target="_blank">
							{link.text}
						</a>
					))}
				</div>
			</div>
		</div>
	);
};
