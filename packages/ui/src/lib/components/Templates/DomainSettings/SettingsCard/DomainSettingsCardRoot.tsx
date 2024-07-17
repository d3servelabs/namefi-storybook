import  { cn }  from "@namefi/utils"
import React from "react";

export default function DomainSettingsCardRoot({
	children, 
	className,
	...props
}: React.ComponentProps<'div'> & {children: React.ReactNode}) {
	return (
		<div
			{...props}
			className={cn(
				'w-full h-full rounded-5 bg-[#222B27] p-5 overflow-hidden',
				className,
			)}>
			{children}
		</div>
	);
}
