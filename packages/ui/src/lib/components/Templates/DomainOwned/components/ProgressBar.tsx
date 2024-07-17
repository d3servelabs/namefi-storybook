import React, { useMemo } from 'react';
import  { cn }  from "@namefi/utils"

const PROGRESS_WIDTH_MAXIMUM = 100;
const PROGRESS_WIDTH_MINIMUM = 5;

export type ProgressBarProps = {
	value: number;
	className?: string;
};

export const ProgressBar = ({ value = 0, className }: ProgressBarProps) => {
	const width = useMemo(
		() => Math.min(Math.max(value, PROGRESS_WIDTH_MINIMUM), PROGRESS_WIDTH_MAXIMUM),
		[value],
	);
	return (
		<div className={cn('w-full h-[3px] rounded-[3px] bg-[#1d3b2d] overflow-hidden', className)}>
			<div
				className={cn('h-full overflow-visible', value < 100 && 'animate-loading')}
				style={{ width: width < 100 ? `${100 - width}%` : '100%' }}>
				<div
					className={cn('h-full rounded-[3px] bg-[#71E0AC]')}
					style={{
						width: `${width < 100 ? (100 / (100 - width)) * width : 100}%`,
					}}></div>
			</div>
		</div>
	);
};
