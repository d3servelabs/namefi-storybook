import React from 'react';
import  { cn }  from "@namefi/utils"

type AppLayoutHeaderProps = React.ComponentProps<'main'> & {};

export default function BaseLayoutBody({ className, children, ...props }: AppLayoutHeaderProps) {
	return (
		<main {...props} className={cn('flex-1 h-full ', className)}>
			{children}
		</main>
	);
}
