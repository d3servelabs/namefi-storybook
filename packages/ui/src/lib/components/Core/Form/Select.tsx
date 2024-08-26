import clsx from 'clsx';
import React, {ComponentProps} from 'react';
import { cn } from '../../../utils/cn';

export interface SelectProps extends React.ComponentProps<'select'> {

	className?: string;
}

const Select = ({ children, className, ...props }: SelectProps) => {
	return (
		<select
			{...props}
			className={cn(
				'outline-none bg-[#232C27] py-2 px-3 placeholder:text-[#797979] rounded-md ',
				className,
			)}>
			{children}
		</select>
	);
};

const Option = ({children,...props}: ComponentProps<'option'>)=> <option {...props}>{children}</option>


export default Object.assign(Select, {Option});
