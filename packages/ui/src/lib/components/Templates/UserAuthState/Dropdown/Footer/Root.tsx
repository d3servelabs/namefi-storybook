import React, { ComponentProps } from 'react';
import { cn } from '../../../../../utils/cn';

export function Root({
	className,
	children,
	...props
}: ComponentProps<'div'>) {
	return (
		<div
			{...props}
			className={cn(
				'relative  flex items-center justify-between border-t-[1.5px] border-t-[#444] pt-5',className
			)}>
			{children}
		</div>
	);
}

export default Root;