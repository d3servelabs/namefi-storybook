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
			<div className="flex justify-between items-center px-12">
				<div className="text-base text-black-400 mr-12">{children}</div>
				<div className="flex gap-12 text-lg text-[#d6d6d6]">
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
