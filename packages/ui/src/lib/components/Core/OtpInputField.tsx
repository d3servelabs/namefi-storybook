import React, { useCallback, useMemo, useState } from 'react';
import  { cn }  from "@namefi/utils"

export interface OTPInputFieldProps {
	fieldLength: number;
	onValueChange: (value: string) => void;
	allowedChars?: RegExp;
	otpValue: string;
}

const REGEX_DIGIT = /^\d+$/;

export const OtpInputField = ({
	fieldLength,
	otpValue,
	onValueChange,
	allowedChars = REGEX_DIGIT,
	...props
}: OTPInputFieldProps) => {
	const otpArray = useMemo(() => {
		const valueArray = otpValue.split('');
		const items: Array<string> = [];
		for (let i = 0; i < fieldLength; i++) {
			const char = valueArray[i];

			if (allowedChars.test(char)) {
				items.push(char);
			} else {
				items.push('');
			}
		}
		return items;
	}, [otpValue, fieldLength]);

	const onInputChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>, index: number) => {
			const target = e.target;
			let value = target.value;
			const isValue = allowedChars.test(value);
			if (!isValue && value !== '') {
				return;
			}

			value = isValue ? value : '';

			const newValue = otpValue.substring(0, index) + value + otpValue.substring(index + 1);
			onValueChange?.(newValue);

			if (!isValue) {
				return;
			}

			const nextElementSibling = target.nextElementSibling as HTMLInputElement;
			if (nextElementSibling) {
				nextElementSibling.focus();
			}
		},
		[otpValue, onValueChange, allowedChars],
	);

	const onKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
		const target = e.target as HTMLInputElement;
		const previousElementSibling = target.previousElementSibling as HTMLInputElement;
		if (e.keyCode !== 8 || e.key !== 'Backspace' || target.value !== '') {
			return;
		}
		if (previousElementSibling) {
			previousElementSibling.focus();
		}
	}, []);
	return (
		<div className="w-full flex gap-1">
			{otpArray.map((digit, index) => (
				<input
					className={cn(
						' outline-none w-7 h-9 rounded-2 placeholder:text-primary-500 focus:border focus:bg-black-900 focus:border-primary-500 bg-[#313131cc] font-primary tracking-wider font-normal text-lg text-center text-primary-500 ',
						otpArray[index] && ' bg-black-900',
					)}
					placeholder="_"
					type="text"
					inputMode="numeric"
					value={digit}
					pattern="\d{1}"
					maxLength={fieldLength}
					onKeyDown={(evt) => onKeyDown(evt)}
					onChange={(evt) => onInputChange(evt, index)}
					key={`input-${index}`}
					{...props}
				/>
			))}
		</div>
	);
};
