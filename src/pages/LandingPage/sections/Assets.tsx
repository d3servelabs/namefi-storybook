import React, { useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ViewFinder } from '../components/ViewFinder';
import { cn } from '../../../utils/cn';

export interface AssetItem {
	preview: React.ReactNode;
	title: React.ReactNode;
	description: React.ReactNode;
}

export interface AssetsProps {
	items: AssetItem[];
	className?: string;
}

export const Assets = ({ items = [], className }: AssetsProps) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const showPrevious = useCallback(() => {
		setCurrentIndex(currentIndex - 1);
	}, [currentIndex, setCurrentIndex]);
	const showNext = useCallback(() => {
		setCurrentIndex(currentIndex + 1);
	}, [currentIndex, setCurrentIndex]);
	return (
		<div className={cn('w-full', className)}>
			<div className="text-primary-500 text-base md:text-3xl font-primary font-bold tracking-wider pb-6 md:pb-18">
				Browse our assets
			</div>
			<ViewFinder className="w-full">
				<div
					className="w-full flex transition"
					style={{
						transform: `translateX(${currentIndex * -100}%)`,
					}}>
					{items.map((item, index) => (
						<div
							key={index}
							className="w-full shrink-0 py-7 md:py-18 px-2.5 md:px-4 flex flex-row-reverse flex-wrap justify-around items-start gap-x-4 gap-y-16">
							<div className="flex md:hidden w-full order-1 justify-between gap-x-3">
								<button
									onClick={showPrevious}
									type="button"
									disabled={index === 0}
									className="text-primary-500 disabled:opacity-0">
									<ChevronLeft className="w-6 h-6" />
								</button>
								<div className="w-full max-w-60">{item.preview}</div>
								<button
									onClick={showNext}
									type="button"
									disabled={index === items.length - 1}
									className="text-primary-500 disabled:opacity-0">
									<ChevronRight className="w-6 h-6" />
								</button>
							</div>
							<div className="hidden md:flex flex-1 min-w-[420px] order-3 justify-center align-items">
								{item.preview}
							</div>
							<div className="w-[508px] order-2">
								<div className="hidden md:flex w-full pb-18 justify-end items-center">
									<button
										onClick={showPrevious}
										type="button"
										disabled={index === 0}
										className="text-primary-500 disabled:text-black-400">
										<ChevronLeft className="w-12 h-12" />
									</button>
									<button
										onClick={showNext}
										type="button"
										disabled={index === items.length - 1}
										className="text-primary-500 disabled:text-black-400">
										<ChevronRight className="w-12 h-12" />
									</button>
								</div>
								<div className="text-primary-500 text-lg md:text-3xl font-semibold mb-6 md:mb-12">
									{item.title}
								</div>
								<div className="text-brand-light text-xs md:text-xl mb-9 md:mb-0">
									{item.description}
								</div>
							</div>
						</div>
					))}
				</div>
			</ViewFinder>
		</div>
	);
};
