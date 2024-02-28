import { cn } from '../../../../utils/cn';
import React from "react";

export default function DomainSettingsRightSection({
	children,
	className,
	...props
}: React.ComponentProps<'div'>) {
	return (
		<div {...props} className={cn('flex flex-col  items-stretch pt-11', className)}>
			{children}
		</div>
	);
}
