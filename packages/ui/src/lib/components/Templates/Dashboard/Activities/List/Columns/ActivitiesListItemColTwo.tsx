import React, { ComponentProps } from 'react';
import  { ReactSingleNode }  from "@namefi/utils"
import  { cn }  from "@namefi/utils"

export default function ActivitiesListItemColTwo({
	className,
	children,
	...props
}: Omit<ComponentProps<'div'>, 'children'> & { children: ReactSingleNode }) {
	return (
		<p
			{...props}
			className={cn('text-center text-base tracking-wider line-clamp-1', className)}>
			{typeof children === 'string' && children.length > 14 ? (
				<>
					{children.substring(0,5)}&bull;&bull;&bull;{children.substring(children.length-6)}
				</>
			) : (
				children
			)}
		</p>
	);
}
