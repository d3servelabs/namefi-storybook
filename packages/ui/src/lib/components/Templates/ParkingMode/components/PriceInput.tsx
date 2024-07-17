import React, { useState, useMemo, useEffect, useCallback, forwardRef } from 'react';
import  { cn }  from "@namefi/utils"

export interface PriceInputProps {
	value: number | null;
	exchangeRate?: number;
	minimum?: number;
	maximum?: number;
	fixed?: number;
	maxLength?: number;
	onChange?: (value: number | null) => void;
	className?: string;
}

const fix = (value: number, fixed: number) =>
	fixed === Infinity || typeof fixed !== 'number' ? value : value.toFixed(fixed);

export const PriceInput = forwardRef(
	(
		{
			value,
			exchangeRate = 1,
			minimum = -Infinity,
			maximum = Infinity,
			fixed = Infinity,
			maxLength,
			onChange,
			className,
		}: PriceInputProps,
		ref: React.Ref<HTMLInputElement>,
	) => {
		const [isFocus, setIsFocus] = useState(false);
		const [input, setInput] = useState('');
		const dollar = useMemo(() => fix(+input * exchangeRate, 2), [input, exchangeRate]);
		const handleInputChange = useCallback(
			(event: React.ChangeEvent<HTMLInputElement>) => {
				const string = event.target.value;
				const number = +string;
				if (isNaN(number)) {
					setInput(string);
					return;
				}
				if (number < minimum) {
					setInput(String(minimum));
					return;
				}
				if (number > maximum) {
					setInput(String(maximum));
					return;
				}
				setInput(string);
			},
			[setInput, minimum, maximum],
		);
		const handleInputFocus = useCallback(() => setIsFocus(true), [setIsFocus]);
		const handleInputBlur = useCallback(() => {
			setIsFocus(false);
			const next = input ? +fix(+input, fixed) : null;
			setInput(next !== null ? String(next) : '');
			onChange?.(next);
		}, [setIsFocus, onChange, input, fixed]);
		useEffect(() => {
			setInput(String(value !== null ? value : ''));
		}, [value, setInput]);
		return (
			<div
				className={cn(
					'transition relative py-3 px-6 bg-[#313131] rounded-2.5 font-primary',
					isFocus && 'ring-1 ring-primary-500',
					className,
				)}>
				<input
					className="absolute top-0 left-0 w-full h-full py-3 px-6 bg-transparent focus:outline-0 text-transparent text-3xl tracking-wider caret-primary-light"
					value={input}
					onChange={handleInputChange}
					onFocus={handleInputFocus}
					onBlur={handleInputBlur}
					maxLength={maxLength}
					ref={ref}
				/>
				<span
					className={cn(
						'transition text-3xl tracking-wider',
						isFocus ? 'text-black-500' : 'text-primary-500',
					)}>
					{input}
				</span>
				<span className="text-sm text-black-500 font-light ml-2.5">≈${dollar}</span>
			</div>
		);
	},
);
