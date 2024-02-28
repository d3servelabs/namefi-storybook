import React, { useCallback } from 'react';
import { NamefiBrandText } from '../../components/NamefiBrandText';
import { cn } from '../../utils/cn';
import { useShortAddress } from './useShortAddress';

export interface NameDisplayProps {
	name: string;
	punycode?: string;
	owner: string;
	status: 'for-bid' | 'for-sale';
	onClickOwner?: () => void;
	className?: string;
}

export const NameDisplay = ({
	name,
	punycode,
	owner,
	status,
	onClickOwner,
	className,
}: NameDisplayProps) => {
	const shortOwner = useShortAddress(owner);
	const handleClickOwner = useCallback(() => {
		onClickOwner?.();
	}, [onClickOwner]);
	return (
		<div
			className={cn(
				'w-[652px] h-[200px] bg-[#31313166] rounded-3xl flex flex-col justify-center items-center relative',
				className,
			)}>
			<div className="flex flex-col justify-center items-center">
				<div className="text-[64px] leading-tight text-[#fff]">{name}</div>
				{punycode && <div className="text-sm text-black-400">{punycode}</div>}
			</div>
			<div className="absolute -left-8 -top-4">
				<NamefiBrandText className="text-primary-500 text-3xl">
					{status === 'for-bid' ? 'For Bid' : status === 'for-sale' ? 'For Sale' : ''}
				</NamefiBrandText>
			</div>
			<div
				className="flex justify-end items-center mt-4 absolute right-6 bottom-4 cursor-pointer"
				onClick={handleClickOwner}>
				<div className="text-[10px] text-[#acacac] mr-1.5">Owner by </div>
				<div className="text-sm text-[#ededed] mr-3">{shortOwner}</div>
				<img
					className="text-sm w-5 text-[#ededed] mr-3"
					src="/assets/Chat.svg"
					alt="chat"
				/>
			</div>
		</div>
	);
};
