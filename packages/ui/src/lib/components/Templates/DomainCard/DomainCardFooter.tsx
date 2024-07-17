import React from 'react';
import  { cn }  from "@namefi/utils"

function DomainCardFooter({
	children,
	className,small,
	...props
}: React.ComponentProps<'div'> & {small?:boolean}) {
	return (
		<div {...props} className={cn('w-full h-9 flex justify-between items-center', small && "h-6.75", className)}>
			{children}
		</div>
	);
}

function DomainCardFooterSmall({
	children,
	...props
}: React.ComponentProps<'div'>) {
	return (
		<DomainCardFooter {...props} small={true}>
			{children}
		</DomainCardFooter>
	);
}
DomainCardFooter.Small = DomainCardFooterSmall

export default DomainCardFooter