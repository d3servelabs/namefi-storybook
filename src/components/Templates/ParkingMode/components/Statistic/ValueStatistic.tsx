import React from 'react';
import { Statistic } from './Statistic';
import { usePrettyPrice } from '../../hooks/usePrettyPrice';

export interface ValueStatisticProps {
	title: React.ReactNode;
	value: number;
	unit: string;
	description?: React.ReactNode;
	tip?: React.ReactNode;
	className?: string;
}

export const ValueStatistic = ({
	title,
	value,
	unit,
	description,
	tip,
	className,
}: ValueStatisticProps) => {
	const prettyValue = usePrettyPrice(value, 0);
	return (
		<Statistic title={title} tip={tip} description={description} className={className}>
			<div className="flex items-end">
				<span className="mr-[0.5em]">{prettyValue}</span>
				<span className="text-[10px] md:text-sm xl:text-xl text-[#d6d6d6] leading-6">{unit}</span>
			</div>
		</Statistic>
	);
};
