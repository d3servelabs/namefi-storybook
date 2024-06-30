import React, { useId, useMemo } from 'react';
import { cn } from '../../../../utils/cn';

export interface StepsProps {
	current: number;
	items: React.ReactNode[];
	pending?: React.ReactNode;
	vertical?: boolean;
	itemClassName?: string;
	className?: string;
}

export const Steps = ({
	items,
	current,
	pending,
	vertical,
	itemClassName,
	className,
}: StepsProps) => {
	return (
		<ol className={cn('flex', vertical ? 'flex-col justify-start' : '', className)}>
			{items.map((item, index) => {
				return (
					<li
						key={index}
						className={cn(
							'flex items-center',
							vertical
								? 'gap-x-3 __namefi__steps-item-vertical'
								: 'flex-col gap-y-3 __namefi__steps-item',
						)}>
						<div
							className={cn(
								'flex justify-center',
								vertical ? 'self-stretch items-center' : 'w-full',
								'before:border-solid after:border-solid before:opacity-20 after:opacity-20',
								index === current - 0.5 && 'after:border-dashed after:opacity-90',
								index === current + 0.5 && 'before:border-dashed before:opacity-90',
							)}>
							<div
								className={cn(
									'w-[28px] h-[28px] border border-primary-dark rounded-full flex items-center justify-center text-base font-semibold z-10',
									index === current
										? 'text-[#313131] bg-primary-500'
										: 'text-primary-dark bg-black-900',
								)}>
								{index + 1}
							</div>
							{index === current - 0.5 && pending}
						</div>
						<div
							className={cn(
								'flex text-xs tracking-wide whitespace-nowrap',
								vertical ? 'items-center min-h-14' : 'justify-center min-w-14',
								index === current ? 'text-white font-medium' : 'text-grey',
								itemClassName,
							)}>
							{item}
						</div>
					</li>
				);
			})}
		</ol>
	);
};
