import React from 'react';
import { cn } from '../../../../utils/cn';

export type LinkChipProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const LinkChip = ({ className, ...props }: LinkChipProps) => {
	return (
		<a
			className={cn(
				'transition py-2.5 px-6 flex justify-center items-center border-[#4a4a4a] border bg-[#1c1c1c] rounded-3xl font-primary text-lg text-[#d2d2d2] cursor-pointer hover:ring-primary-500 hover:ring-2 hover:ring-inset hover:bg-black-900 hover:text-white',
				cn,
			)}
			{...props}
		/>
	);
};
