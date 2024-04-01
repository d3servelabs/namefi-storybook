import React from 'react';
import { css } from '@emotion/css';
import { cn } from '../../../../utils/cn';

export interface StepsProps {
	current: number;
	items: React.ReactNode[];
	pending?: React.ReactNode;
	itemClassName?: string;
	className?: string;
}

const stylesheets = css`
	& > :first-child {
		position: relative;
		&:before,
		&:after {
			content: '';
			position: absolute;
			width: 50%;
			border-top-width: 1px;
			border-color: #e6eedb;
			top: 50%;
			z-index: -1;
		}
		&:before {
			left: 0;
		}
		&:after {
			left: 50%;
		}
		& > :nth-child(2) {
			position: absolute;
			left: 50%;
			width: 100%;
			font-size: 10px;
			display: flex;
			justify-content: center;
		}
	}
	& > :last-child {
		padding: 0 12px;
	}
	&:first-child {
		& > :first-child {
			&:before {
				display: none;
			}
		}
	}
	&:last-child {
		& > :first-child {
			&:after {
				display: none;
			}
		}
	}
`;

export const Steps = ({ items, current, pending, itemClassName, className }: StepsProps) => {
	return (
		<ol className={cn('flex', className)}>
			{items.map((item, index) => {
				return (
					<li
						key={index}
						className={cn('flex flex-col items-center gap-y-3', stylesheets)}>
						<div
							className={cn(
								'w-full flex justify-center',
								'before:border-solid after:border-solid before:opacity-20 after:opacity-20',
								index === current - 0.5 && 'after:border-dashed after:opacity-90',
								index === current + 0.5 && 'before:border-dashed before:opacity-90',
							)}>
							<div
								className={cn(
									'w-[28px] y-[28px] border border-primary-dark rounded-full flex items-center justify-center text-base font-semibold',
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
