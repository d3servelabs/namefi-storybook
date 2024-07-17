import React, { ComponentProps } from 'react';
import  { cn }  from "@namefi/utils"
import clsx from 'clsx';

export default function ActivitiesListRoot({
	children,
	className,
	...props
}: ComponentProps<'div'>) {
	return (
		<div
			{...props}
			className={clsx(
				cn(
					'w-full max-h-82 overflow-y-scroll overflow-x-hidden gap-4.5 px-4',
					'grid grid-cols-[minmax(7rem,1fr)_minmax(16ch,1fr)_minmax(12.5rem,1fr)]'
				),
				'scrollbar scrollbar-w-1.25 scrollbar-thumb-primary-500/70 active:scrollbar-thumb-primary-500 scrollbar-thumb-rounded-full',
			)}>
			{children}
		</div>
	);
}
