import { cn } from '../../../utils/cn';
import React from 'react';
export default function OwnedDomainsGridRoot({
	children,
	className,
	...props
}: React.ComponentProps<'div'>) {
	return (
		<div
			{...props}
			className={cn(
				'grid w-auto grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-9',
				className,
			)}>
			{children}
		</div>
	);
}

