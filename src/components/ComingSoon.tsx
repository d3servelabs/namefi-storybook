import React, { useCallback } from 'react';
import { cn } from '../utils/cn';
import DiscordIcon from "./Core/icons/DiscordIcon";

export const ComingSoon = ({
	onClickDiscord,
	className,
}: {
	onClickDiscord?: () => void;
	className?: string;
}) => {
	const handleClickDiscord = useCallback(() => {
		onClickDiscord?.();
	}, []);
	return (
		<div
			className={cn(
				'flex flex-col justify-content items-center w-full p-6 rounded-[10px] bg-black-900',
				className,
			)}>
			<div className="font-[Zilla Slab Highlight] font-bold text-black-900 text-3xl mb-4">
				<div className="bg-primary-500">Coming Soon!</div>
				<div className="bg-primary-500 opacity-80">Coming Soon!</div>
				<div className="bg-primary-500 opacity-60">Coming Soon!</div>
				<div className="bg-primary-500 opacity-40">Coming Soon!</div>
				<div className="bg-primary-500 opacity-20">Coming Soon!</div>
			</div>
			<div className="text-xs leading-loose font-primary text-primary-500 mb-9">
				This is a planned feature.
			</div>
			<div className="flex gap-4 items-center text-xs font-primary text-[#fff]">
				Contact us for early access.{' '}
				<DiscordIcon
					className="w-6 h-6 cursor-pointer"
					onClick={handleClickDiscord}
				/>
			</div>
		</div>
	);
};
