import { cn } from '@utils/cn';
import React from "react";

export default function DomainSettingsTitle({
	children,
	className,
	...props
}: React.ComponentProps<'div'> & {children: React.ReactNode}) {
	return (
		<div {...props} className={cn("text-white text-lg font-bold font-['Roboto'] leading-loose tracking-wide mb-3",className)}>
			{children}
		</div>
	);
}
