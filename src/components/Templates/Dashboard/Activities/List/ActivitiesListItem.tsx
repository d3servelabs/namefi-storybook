import React, { ComponentProps, ReactNode } from 'react';
import { Tuple } from '../../../../../utils/Tuple';
import { cn } from '../../../../../utils/cn';

function ActivitiesListItem({
	className,
	children,
	...props
}: ComponentProps<'div'> & { children: Tuple<ReactNode, 3> }) {
	return (
		<div
			{...props}
			className={cn(
								'contents',
				'min-w-[36rem] h-6 font-primary font-normal text-white gap-4',
				className,
			)}>
			{children}
		</div>
	);
}

export default ActivitiesListItem
