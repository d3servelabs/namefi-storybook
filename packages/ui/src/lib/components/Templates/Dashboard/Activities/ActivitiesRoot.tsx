import React, { ComponentProps } from 'react';
import  { cn }  from "@namefi/utils"

export default function ActivitiesRoot({ children, className, ...props }: ComponentProps<'div'>) {
	return (
		<div
			{...props}
			className={cn(
				'relative flex flex-col items-stretch justify-start h-90 gap-[0.625rem]',
				className,
			)}>
			{children}
		</div>
	);
}
