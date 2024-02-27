import React, { ReactNode } from 'react';
import { cn } from '../../utils/cn';

export default function OwnedDomainsRoot({ children, className }: React.ComponentProps<'div'>) {
	return (
		<div className={cn('flex flex-col items-center justify-start gap-12', className)}>
			{children}
		</div>
	);
}
