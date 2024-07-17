import React, { useCallback } from 'react';
import { NamefiBrandText } from '../../../Core/NamefiBrandText';
import  { cn }  from "@namefi/utils"
import { useShortAddress } from '../hooks/useShortAddress';
import { usePunycode } from '../hooks/usePunycode';
import ChatSVG from '../../../../assets/Chat.svg';

export type NameStatus = 'for-bid' | 'for-sale';

export interface NameDisplayProps {
	name: string;
	owner?: string;
	status: NameStatus;
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
			<div className="flex flex-col justify-center items-center py-12 px-10 md:py-16 md:px-24 ">
				<div className="text-3xl md:text-6xl leading-tight text-[#fff]">{name}</div>
				{punycode && punycode !== name && (
					<div className="text-sm text-black-400">{punycode}</div>
				)}
			</div>
			<div className="absolute -left-1.5 -top-3 md:-left-8 md:-top-4">
				<NamefiBrandText className="text-primary-500 text-xl md:text-3xl">
					{status === 'for-bid' ? 'For Bid' : status === 'for-sale' ? 'For Sale' : ''}
				</NamefiBrandText>
			</div>
			{owner && (
				<div
					className={cn(
						'flex justify-end items-center mt-4 absolute right-2.5 bottom-2.5 md:right-6 md:bottom-4 origin-bottom-right scale-50 md:scale-100',
						onClickOwner ? 'cursor-pointer' : '',
					)}
					onClick={handleClickOwner}>
					<div className="text-[10px] text-[#acacac] mr-1.5">Owner by </div>
					<div className="text-sm text-[#ededed] mr-3">{shortOwner}</div>
					<img
						className={cn(
							'text-sm w-5 text-[#ededed] mr-3',
							onClickOwner ? 'hidden sm:inline-block' : 'hidden',
						)}
						src={ChatSVG}
						alt="chat"
					/>
				</div>
			)}
		</div>
	);
};
