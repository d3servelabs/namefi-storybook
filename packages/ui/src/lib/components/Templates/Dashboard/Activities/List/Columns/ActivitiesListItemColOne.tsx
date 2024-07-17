import React, { ComponentProps } from 'react';
import  { cn }  from "@namefi/utils"

export default function ActivitiesListItemColOne({ className, children, ...props }: ComponentProps<'div'>) {
	return (
		<p {...props} className={cn('text-base tracking-wider')}>
			{children}
		</p>
	);
}
