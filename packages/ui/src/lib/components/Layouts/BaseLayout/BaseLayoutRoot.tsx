import React from 'react';
import  {cn}  from "@namefi/utils"


type AppLayoutProps = React.ComponentProps<'div'> & {
	header: React.ReactNode;
	footer: React.ReactNode;
};

export default function BaseLayoutRoot({ header, footer, children, ...props }: AppLayoutProps) {
	return (
		<div {...props} className={cn('bg-black h-full flex flex-col items-stretch justify-between', props.className)}>
			{header}
			{children}
			{footer}
		</div>
	);
}
