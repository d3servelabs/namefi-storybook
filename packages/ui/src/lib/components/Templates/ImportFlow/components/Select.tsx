import React, { useState, useMemo, useCallback } from 'react';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { cn } from '../../../../utils/cn';

export interface Option<T extends unknown = string> {
	value: T;
	label: React.ReactNode;
	addon?: React.ReactNode;
}

export interface SelectProps<T extends unknown = string> {
	value?: T;
	onChange?: (value: T) => void;
	options: Option<T>[];
	placeholder?: React.ReactNode;
	addon?: React.ReactNode;
	className?: string;
	disabled?: boolean;
}

export const Select = <T extends unknown = string>({
	value,
	onChange,
	options,
	placeholder,
	addon,
	className,
	disabled = false,
}: SelectProps<T>) => {
	const [isSelecting, setIsSelecting] = useState(false);
	const current = useMemo(() => {
		if (!value) {
			return;
		}
		return options.find((option) => option.value === value);
	}, [value, options]);
	const handleClick = useCallback(() => {
		if (disabled) return;
		setIsSelecting(!isSelecting);
	}, [isSelecting, disabled]);
	const handleSelect = useCallback(
		(option: Option<T>) => {
			setIsSelecting(false);
			onChange?.(option?.value);
		},
		[onChange],
	);

	return (
		<div className="relative">
			<div
				onClick={handleClick}
				className={cn(
					'flex justify-between items-center text-sm text-black-500 font-primary bg-black-brand rounded-1 px-2.5 py-1.5 cursor-pointer min-h-9 ring-primary-500 hover:ring-1',
					isSelecting && 'ring-1',
					disabled && 'opacity-50 cursor-not-allowed hover:ring-0',
					className,
				)}>
				<div className="flex-1 flex justify-between items-center">
					{current ? (
						<div>{current?.label}</div>
					) : (
						<div className="text-xs">{placeholder}</div>
					)}
					{addon && <div className="text-[10px] text-primary ml-3">{addon}</div>}
				</div>
				<ChevronDownIcon className="w-4 h-4 text-primary-500 ml-3" />
			</div>
			{isSelecting && (
				<div className="w-full">
					<div className="flex flex-col gap-y-1.5 mt-1 rounded-1 px-2.5 py-2 ring-1 ring-primary-500">
						{options.map((option, index) => {
							return (
								<div
									key={index}
									onClick={() => handleSelect(option)}
									className="transition flex justify-between items-center text-black-500 py-1 pl-1.5 pr-3 cursor-pointer hover:text-primary-500 hover:bg-[#141C18]">
									<div className="text-sm">{option.label}</div>
									<div className="text-[10px] ml-3">{option.addon}</div>
								</div>
							);
						})}
					</div>
				</div>
			)}
		</div>
	);
};
