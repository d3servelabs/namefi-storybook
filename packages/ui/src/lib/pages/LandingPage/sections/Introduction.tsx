import React, { Fragment } from 'react';
import { ViewFinder } from '../components/ViewFinder';
import { RisingNumber } from '../components/RisingNumber';
import  { cn }  from "@namefi/utils"

export interface IntroductionStatisticItem {
	value: number;
	label: React.ReactNode;
}

export interface IntroductionFlowItem {
	thumbnail: string;
	label: React.ReactNode;
}

export interface IntroductionProps {
	title: React.ReactNode;
	subtitle: React.ReactNode;
	description: React.ReactNode;
	statistics: IntroductionStatisticItem[];
	flows: IntroductionFlowItem[];
	className?: string;
}

export const Introduction = ({
	title,
	subtitle,
	description,
	statistics,
	flows,
	className,
}: IntroductionProps) => {
	return (
		<div id="introduction" className={cn('w-full', className)}>
			<ViewFinder className="mb-10 md:mb-16">
				<div className="flex justify-between items-center text-5xl md:text-8xl p-4 md:p-16">
					{statistics.map((statistic, index) => (
						<Fragment key={index}>
							{index !== 0 && <div className="text-grey font-primary">,</div>}
							<div className="flex flex-col items-center w-full flex-1 p-2.5 md:p-5">
								<div className="text-primary-500 font-primary font-light leading-tight mb-1 md:mb-4">
									<RisingNumber value={statistic.value} />
								</div>
								<div className="text-grey text-[10px] md:text-lg">
									{statistic.label}
								</div>
							</div>
						</Fragment>
					))}
				</div>
			</ViewFinder>
			<div className="bg-[#121212] rounded-2.5 md:rounded-5 py-6 md:py-12 px-8 md:px-16 mb-20 md:mb-0">
				<div className="text-primary-500 text-lg md:text-3xl font-slab font-medium leading-loose mb-0 md:mb-2">
					{title}
				</div>
				<div className="text-brand-light text-xs md:text-lg font-slab font-light leading-loose mb-10">
					{subtitle}
				</div>
				<div className="text-white text-[10px] md:text-lg font-light mb-3 tracking-wider">
					{description}
				</div>
			</div>
			<div className="flex md:hidden flex-wrap justify-around items-end gap-10">
				{flows.map(({ thumbnail, label }, index) => (
					<div key={index}>
						<div className="flex justify-center">
							<ViewFinder className="bg-[#111111] mb-2 md:mb-4">
								<div className="py-4 md:py-8">
									<img src={thumbnail} alt="thumbnail" />
								</div>
							</ViewFinder>
						</div>
						<div className="text-black-500 text-[10px] md:text-lg font-primary text-center">
							{label}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
