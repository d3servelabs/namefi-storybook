import React from 'react';
import { cn } from '../../utils/cn';

export const TLDChip = ({
	children,
	className,
	onClick,
}: {
	children: React.ReactNode;
	className?: string;
	onClick?: () => void;
}) => {
	return (
		<div
			className={cn(
				'transition py-[5px] md:py-2.5 px-[14px] md:px-6 flex justify-center items-center border-[#4a4a4a] border bg-[#1c1c1c] rounded-3xl font-primary text-[10px] md:text-lg text-[#d2d2d2] cursor-pointer hover:ring-primary-500 hover:ring-2 hover:ring-inset hover:bg-black-900 hover:text-white',
				cn,
			)}
			onClick={onClick}>
			{children}
		</div>
	);
};
