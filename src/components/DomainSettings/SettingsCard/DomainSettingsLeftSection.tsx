import { cn } from '../../../utils/cn';
import React from "react";

export default function DomainSettingsLeftSection({
	children,
	className,
	...props
}: React.ComponentProps<'div'>) {
	return (
		<div {...props} className={cn('flex-col flex  items-start', className)}>
			{children}
		</div>
	);
}
