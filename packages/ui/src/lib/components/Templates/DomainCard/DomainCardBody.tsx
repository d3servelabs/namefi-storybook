import React from 'react';
import  { cn }  from "@namefi/utils"

function DomainCardBody({
	children,
	className,small,
	...props
}: React.ComponentProps<'h3'> & {small?:boolean}) {
	return (
		<h3
			{...props}
			className={cn('tracking-widest text-white','font-semibold text-7lg', small && "text-5.25lg font-medium", className)}>
			{children}
		</h3>
	);
}

function DomainCardBodySmall({
	children,
	className,
	...props
}: React.ComponentProps<'h3'> ) {
	return (
		<DomainCardBody {...props} small={true}>
			{children}
		</DomainCardBody>
	);
}
DomainCardBody.Small = DomainCardBodySmall
export default  DomainCardBody