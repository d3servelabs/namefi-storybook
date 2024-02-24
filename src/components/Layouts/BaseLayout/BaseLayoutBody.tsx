import React from 'react';
import { cn } from '@utils/cn';

type AppLayoutHeaderProps = React.ComponentProps<'main'> & {};

export default function BaseLayoutBody({ className, children, ...props }: AppLayoutHeaderProps) {
	return (
		<main {...props} className={cn('flex-1 h-full ', className)}>
			{children}
		</main>
	);
}
