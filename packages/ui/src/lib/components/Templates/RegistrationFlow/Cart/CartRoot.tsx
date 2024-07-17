import React, { ComponentProps } from 'react';
import  { cn }  from "@namefi/utils"

export default function CartRoot({ className, children, ...props }: ComponentProps<'div'>) {
	return (
		<div
			{...props}
			className={cn('relative flex flex-col gap-9 items-center max-w-[500px] ', className)}>
			{children}
		</div>
	);
}
