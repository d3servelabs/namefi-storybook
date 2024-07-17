import { Surface } from '../../../Core';
import { Checkbox } from '../../../Core/Checkbox';
import React, { ComponentProps } from 'react';
import  { cn }  from "@namefi/utils"

function AgreeToTermsRoot({ className, children, ...props }: ComponentProps<typeof Surface>) {
	return (
		<Surface
			{...props}
			className={cn('grid place-items-center px-5 py-2 !rounded-1.25', className)}>
			<div className="relative flex items-center gap-3 ">{children}</div>
		</Surface>
	);
}

export function AgreeToTermsLabel({ className, children, ...props }: ComponentProps<'p'>) {
	return (
		<p {...props} className={cn('font-primary text-white font-normal text-xs')}>
			{children}
		</p>
	);
}

export { AgreeToTermsRoot as Root, AgreeToTermsLabel as Label, Checkbox };
