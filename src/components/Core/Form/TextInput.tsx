import clsx from 'clsx';
import React from 'react';
import { cn } from '../../../utils/cn';
import FormHelperText from "./FormControl/FormHelperText";

export interface TextInputProps extends React.ComponentProps<'input'> {

	error?: any;
}

const TextInput = ({
	placeholder,
	className,
	error,
	...props
}: TextInputProps) => {
	return (
		<>
			<input
				{...props}
				className={cn(
					'outline-none ring-0 bg-[#232C27] py-2 px-3 placeholder:text-[#797979] rounded-md ',
					'focus:ring-1 focus:ring-primary-60 disabled:bg-[#232C27]/60 disabled:cursor-not-allowed',
					error && 'focus:ring-error bg-error-20 text-error-light placeholder:text-error-light/50',
					className,
				)}
				placeholder={placeholder}
			/>


		</>
	);
};
export default TextInput;
