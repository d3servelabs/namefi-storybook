import { useState } from 'react';
import { cn } from '../../../utils';
import { useSearchbarContext } from './SearchbarContext';

export type AvailableOptionsType = {
	name: string;
	active: boolean;
};

export default function AvailableOptions() {
	const { selectedFilters, setSelectedFilters } = useSearchbarContext();

	const handleClick = (name) => {
		setSelectedFilters((prevOptions) => {
			return prevOptions.map((option) => ({
				...option,
				active: option.name === name,
			}));
		});
	};

	return (
		<div className="space-x-2.5">
			{selectedFilters.map(({ name, active }) => (
				<span
					key={name}
					onClick={() => handleClick(name)}
					className={cn(
						'cursor-pointer rounded-full bg-[#A9F2CE0A] px-4 py-2.5 font-primary text-[16px] text-primary-500 transition-all duration-200 ease-in-out active:bg-[#102d1f29]',
						active ? 'bg-[#48E59B3D]' : '',
					)}>
					{name}
				</span>
			))}
		</div>
	);
}
