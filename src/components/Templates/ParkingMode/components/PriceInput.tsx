import React, { useState, useMemo, useCallback, forwardRef } from 'react';
import { cn } from '../../../../utils/cn';

export interface PriceInputProps {
	value: number | null;
	exchangeRate?: number;
	minimum?: number;
	maximum?: number;
	onChange?: (value: number | null) => void;
	className?: string;
}

export const PriceInput = forwardRef(
	(
		{
			value,
			exchangeRate = 1,
			minimum = -Infinity,
			maximum = Infinity,
			onChange,
			className,
		}: PriceInputProps,
		ref: React.Ref<HTMLInputElement>,
	) => {
		const [isFocus, setIsFocus] = useState(false);
		const dollar = useMemo(
			() => ((value || 0) * exchangeRate).toFixed(2),
			[value, exchangeRate],
		);
		const handleInputChange = useCallback(
			(e: React.ChangeEvent<HTMLInputElement>) => {
				const { value } = e.target;
				const number = +value;
				if (!onChange) {
					return;
				}
				if (!value) {
					onChange(null);
					return;
				}
				if (isNaN(number)) {
					return;
				}
				if (number < minimum) {
					onChange(minimum);
					return;
				}
				if (number > maximum) {
					onChange(maximum);
					return;
				}
				onChange(number);
			},
			[onChange, minimum, maximum],
		);
		const handleInputFocus = useCallback(() => setIsFocus(true), [setIsFocus]);
		const handleInputBlur = useCallback(() => setIsFocus(false), [setIsFocus]);
		return (
			<div
				className={cn(
					'transition relative py-3 px-6 bg-[#313131] rounded-2.5 font-primary',
					isFocus && 'ring-1 ring-primary-500',
					className,
				)}>
				<input
					className="absolute top-0 left-0 w-full h-full py-3 px-6 bg-transparent focus:outline-0 text-transparent text-3xl tracking-wider caret-primary-light"
					value={value === null ? '' : value}
					onChange={handleInputChange}
					onFocus={handleInputFocus}
					onBlur={handleInputBlur}
					ref={ref}
				/>
				<span
					className={cn(
						'transition text-3xl tracking-wider',
						isFocus ? 'text-black-500' : 'text-primary-500',
					)}>
					{value === null ? '' : value}
				</span>
				<span className="text-sm text-black-500 font-light ml-2.5">≈${dollar}</span>
			</div>
		);
	},
);
