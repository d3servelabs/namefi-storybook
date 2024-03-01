import React, { useCallback } from 'react';
import { NamefiBrandText } from '../../components/Core/NamefiBrandText';
import { cn } from '../../utils/cn';
import { useShortAddress } from './hooks/useShortAddress';
import { usePunycode } from './hooks/usePunycode';
import ChatSVG from '../../assets/Chat.svg';

export interface NameDisplayProps {
	name: string;
	owner: string;
	status: 'for-bid' | 'for-sale';
	onClickOwner?: () => void;
	className?: string;
}

export const NameDisplay = ({ name, owner, status, onClickOwner, className }: NameDisplayProps) => {
	const punycode = usePunycode(name);
	const shortOwner = useShortAddress(owner);
	const handleClickOwner = useCallback(() => {
		onClickOwner?.();
	}, [onClickOwner]);
	return (
		<div
			className={cn(
				'bg-[#31313166] rounded-3xl flex flex-col justify-center items-center relative',
				className,
			)}>
			<div className="flex flex-col justify-center items-center py-12 px-10 sm:py-8 sm:px-12 md:py-9 md:px-16 xl:py-16 xl:px-24 ">
				<div className="text-3xl md:text-4xl xl:text-6xl leading-tight text-[#fff]">
					{name}
				</div>
				{punycode && punycode !== name && (
					<div className="text-sm text-black-400">{punycode}</div>
				)}
			</div>
			<div className="absolute -left-1.5 -top-3 sm:-left-4 sm:-top-2 md:-left-5 md:-top-2.5 xl:-left-8 xl:-top-4">
				<NamefiBrandText className="text-primary-500 text-xl sm:text-sm md:text-lg xl:text-3xl">
					{status === 'for-bid' ? 'For Bid' : status === 'for-sale' ? 'For Sale' : ''}
				</NamefiBrandText>
			</div>
			<div
				className="flex justify-end items-center mt-4 absolute right-2.5 bottom-2.5 sm:right-3.5 sm:bottom-2 md:right-t md:bottom-2 xl:right-6 xl:bottom-4 cursor-pointer origin-bottom-right scale-50 xl:scale-100"
				onClick={handleClickOwner}>
				<div className="text-[10px] text-[#acacac] mr-1.5">Owner by </div>
				<div className="text-sm text-[#ededed] mr-3">{shortOwner}</div>
				<img
					className="text-sm w-5 text-[#ededed] mr-3 hidden sm:inline-block"
					src={ChatSVG}
					alt="chat"
				/>
			</div>
		</div>
	);
};
