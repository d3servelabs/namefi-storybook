import React, { ComponentProps } from 'react';
import  { cn }  from "@namefi/utils"

export default function ActivitiesHeaderTitle({ children, className, ...props }: ComponentProps<'h3'>){
	return (
		<h3
			{...props}
			className={cn('font-bold text-5.25lg tracking-[0.05em] text-[#d9d9d9]', className)}>
			{children}
		</h3>
	);
};