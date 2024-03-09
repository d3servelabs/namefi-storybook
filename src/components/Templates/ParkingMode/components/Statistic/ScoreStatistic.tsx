import React from 'react';
import { Statistic } from './Statistic';

export interface ScoreStatisticProps {
	title: React.ReactNode;
	score: number;
	description?: React.ReactNode;
	tip?: React.ReactNode;
	className?: string;
}

export const ScoreStatistic = ({
	title,
	score,
	description,
	tip,
	className,
}: ScoreStatisticProps) => {
	return (
		<Statistic title={title} tip={tip} description={description} className={className}>
			<div className="w-[122px] sm:w-[140px] md:w-[160px] xl:w-[280px] flex justify-center items-end">
				<span>{score}</span>
				<span className="text-[10px] md:text-sm xl:text-xl text-[#d6d6d6] leading-6">
					/100
				</span>
			</div>
		</Statistic>
	);
};
