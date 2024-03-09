import React from 'react';
import { cn } from '../../../../utils/cn';
import { NamefiBrandText } from '../../../Core/NamefiBrandText';

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
		<div className={cn('border-t-none md:border-t-[0.75px] md:border-[#A5A5A5] pt-8 pb-10 bg-[#242424]', className)}>
			<div className="flex flex-col-reverse flex-wrap md:flex-row gap-2 gap-x-6 md:gap-4 md:gap-x-12 justify-between items-center px-12 max-w-[1488px] mx-auto">
				<div className="flex items-center gap-x-6 mt-4 md:mt-0">
					<NamefiBrandText className="hidden md:block text-white text-sm md:text-3xl">
						Namefi
					</NamefiBrandText>
					<div className="text-xs md:text-base text-[#d6d6d6]">{children}</div>
				</div>
				<div className="flex flex-col md:flex-row gap-3 md:gap-12 text-center md:text-left text-xs md:text-lg text-[#d6d6d6]">
					{links.map((link, index) => (
						<a key={index} href={link.href} target="_blank">
							{link.text}
						</a>
					))}
				</div>
				<div className="block md:hidden w-full">
					<NamefiBrandText className="text-white text-sm md:text-3xl">
						Namefi
					</NamefiBrandText>
				</div>
			</div>
		</div>
	);
};
