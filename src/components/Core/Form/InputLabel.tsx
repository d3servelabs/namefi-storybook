import clsx from 'clsx';
import React, { ComponentProps } from 'react';
import {cn} from "../../../utils/cn";

export interface LabelProps extends ComponentProps<'label'> {
	labelName?: string;
	className?: string;
	children?: React.ReactNode;
}

const InputLabel = ({ children, className, labelName, ...props }: LabelProps) => {
	return (
		<label className={cn('flex items-center ', className)} {...props}>
			<p className="text-black-500 tracking-wider max-w-[150px] font-normal text-sm ">
				{labelName}
			</p>
			{children}
		</label>
	);
};
export default InputLabel;
