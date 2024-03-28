import React from 'react';
import { css } from '@emotion/css';
import { cn } from '../../../utils/cn';

export interface StepsProps {
	current: number;
	items: React.ReactNode[];
	className?: string;
}

const stylesheet = css`
	& > :first-child {
		position: relative;
		&:before,
		&:after {
			content: '';
			position: absolute;
			width: 50%;
			height: 1.5px;
			background: #c6eedb;
			top: 50%;
			opacity: 0.1;
			z-index: -1;
		}
		&:before {
			left: 0;
		}
		&:after {
			left: 50%;
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

export const Steps = ({ items, current, className }: StepsProps) => {
	return (
		<ol className={cn('flex', className)}>
			{items.map((item, index) => {
				return (
					<li
						key={index}
						className={cn('flex flex-col items-center gap-y-3', stylesheet)}>
						<div className="w-full flex justify-center">
							<div
								className={cn(
									'w-[28px] y-[28px] border border-primary-dark rounded-full flex items-center justify-center text-base font-semibold',
									index === current
										? 'text-[#313131] bg-primary-500'
										: 'text-primary-dark bg-black-900',
								)}>
								{index + 1}
							</div>
						</div>
						<div>{item}</div>
					</li>
				);
			})}
		</ol>
	);
};
