import React from 'react';
import { cn } from '../../utils/cn';

export type ChipProps = React.ComponentProps<'div'> &
	Partial<{
		selected?: boolean;
		onSelect?: () => void;
	}>;

export function Chip({ selected, onSelect, children, className, ...props }: ChipProps) {
	return (
		<div
			className={cn(
				'py-2.5 px-6.25 flex justify-center items-center border-2 rounded-3xl font-primary text-2.5 md:text-lg cursor-pointer transition',
				selected
					? 'border-primary-500 bg-black-900 text-white'
					: 'border-[#4a4a4a] bg-[#1c1c1c] text-[#d2d2d2] hover:ring-primary-500 hover:ring-2 hover:ring-inset hover:bg-black-900 hover:text-white',
				className,
			)}
			onClick={onSelect}
			{...props}>
			{children}
		</div>
	);
}
