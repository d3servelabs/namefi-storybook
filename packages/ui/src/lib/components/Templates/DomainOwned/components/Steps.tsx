import React, { useId, useMemo } from 'react';
import  { cn }  from "@namefi/utils"

export interface StepsProps extends StepsWithOrientationProps {
	vertical?: boolean;
}

export interface StepsWithOrientationProps {
	current: number;
	items: React.ReactNode[];
	pending?: React.ReactNode;
	size?: string;
	itemClassName?: string;
	className?: string;
}

export const Steps = ({ vertical, ...innerProps }: StepsProps) => {
	return vertical ? <VerticalSteps {...innerProps} /> : <HorizontalSteps {...innerProps} />;
};

const VerticalSteps = ({
	items,
	current,
	pending,
	size,
	itemClassName,
	className,
}: StepsWithOrientationProps) => {
	return (
		<ol className={cn('flex flex-col justify-start', className)}>
			{items.map((item, index) => {
				return (
					<li
						key={index}
						className={cn('flex items-center gap-x-3 __namefi__steps-item-vertical')}>
						<div
							className={cn(
								'flex justify-center self-stretch items-center before:border-solid after:border-solid before:opacity-20 after:opacity-20',
								index === current - 0.5 && 'after:border-dashed after:opacity-90',
								index === current + 0.5 && 'before:border-dashed before:opacity-90',
							)}>
							<div
								className={cn(
									'flex items-center justify-center border border-primary-dark rounded-full text-base font-semibold z-10',
									size === 'sm'
										? 'w-5 h-5 text-xs'
										: size === 'lg'
											? 'w-9 h-9 text-lg'
											: 'w-7 h-7 text-bs',
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
								'flex items-center text-xs tracking-wide whitespace-nowrap',
								size === 'sm'
									? 'min-h-10'
									: size === 'lg'
										? 'min-h-18'
										: 'min-h-14',
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

const HorizontalSteps = ({
	items,
	current,
	pending,
	size,
	itemClassName,
	className,
}: StepsWithOrientationProps) => {
	return (
		<ol className={cn('flex', className)}>
			{items.map((item, index) => {
				return (
					<li
						key={index}
						className={cn('flex items-center flex-col gap-y-3 __namefi__steps-item')}>
						<div
							className={cn(
								'flex justify-center w-full before:border-solid after:border-solid before:opacity-20 after:opacity-20',
								index === current - 0.5 && 'after:border-dashed after:opacity-90',
								index === current + 0.5 && 'before:border-dashed before:opacity-90',
							)}>
							<div
								className={cn(
									'flex items-center justify-center border border-primary-dark rounded-full text-base font-semibold z-10',
									size === 'sm'
										? 'w-5 h-5 text-xs'
										: size === 'lg'
											? 'w-9 h-9 text-lg'
											: 'w-7 h-7 text-bs',
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
								'flex justify-center text-xs tracking-wide whitespace-nowrap',
								size === 'sm'
									? 'min-w-10'
									: size === 'lg'
										? 'min-w-[72px]'
										: 'min-w-14',
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
