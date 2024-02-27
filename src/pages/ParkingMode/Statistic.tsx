import React from 'react';

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
			<div className="text-sm text-black-500 flex gap-2 mb-2">
				{title}
				{tip && <img className="w-[18px]" src="/assets/InfoCircled.svg" alt="Info" />}
			</div>
			<div className="text-5xl text-[#fff] font-primary mb-1">{children}</div>
			{description && (
				<div className="text-sm text-black-500 font-primary font-light">{description}</div>
			)}
		</div>
	);
};
