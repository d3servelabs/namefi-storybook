import React from 'react';
import { Icon } from '../../../components/Core/Icon';

export interface StatisticProps {
	title: React.ReactNode;
	tip?: React.ReactNode;
	children: React.ReactNode;
	description?: React.ReactNode;
	className?: string;
}

export const Statistic = ({ title, tip, children, description, className }: StatisticProps) => {
	return (
		<div className={className}>
			<div className="text-[8px] lg:text-sm text-black-500 flex gap-[0.5em] mb-1 lg:mb-2">
				{title}
				{tip && <Icon icon="InfoCircled" className="text-primary-500" />}
			</div>
			<div className="text-2xl md:text-3xl lg:text-5xl text-[#fff] font-primary mb-0.5 lg:mb-1">
				{children}
			</div>
			{description && (
				<div className="text-[8px] lg:text-sm text-black-500 font-primary font-light">
					{description}
				</div>
			)}
		</div>
	);
};
