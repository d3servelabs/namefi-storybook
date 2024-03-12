import clsx from 'clsx';
import React from 'react';
import { cn } from '../../../utils/cn';

export interface TextInputProps extends React.ComponentProps<'input'> {
	searchValue?: string;
	placeholder?: string;
	className?: string;
	error?: any;
	isEmailVerified?: boolean;
	onSearchChanged?: (value: string) => any;
}

const TextInput = ({
	searchValue,
	placeholder,
	className,
	isEmailVerified,
	error,
	onSearchChanged,
	...props
}: TextInputProps) => {
	return (
		<>
			<input
				{...props}
				className={cn(
					'outline-none bg-[#232C27] py-2 px-3 placeholder:text-[#797979] rounded-md ',
					'focus:outline-2 focus:outline-primary-60 disabled:bg-[#232C27]/60 disabled:cursor-not-allowed',
					error && 'outline-2 outline-error',
					className,
				)}
				value={searchValue}
				onChange={(evt) => onSearchChanged?.(evt.target.value)}
				placeholder={placeholder}
			/>
			<p>

			</p>
		</>
	);
};
export default TextInput;
