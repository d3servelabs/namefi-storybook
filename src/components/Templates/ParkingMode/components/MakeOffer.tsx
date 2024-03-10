import React, { useState, useCallback, useRef } from 'react';
import { ArrowRightIcon, InfoCircledIcon } from '@radix-ui/react-icons';
import { SolidButton, Button } from '../../../Core';
import { PriceInput } from './PriceInput';
import { type NameStatus } from './NameDisplay';

export interface MakeOfferProps {
	exchangeRate: number;
	minimumPrice?: number;
	maximumPrice?: number;
	unit: string;
	domainStatus?: NameStatus;
	priceTip?: React.ReactNode;
	onBuy?: () => void;
	onOffer?: (price: number) => void;
	className?: string;
}

export const MakeOffer = ({
	exchangeRate,
	minimumPrice,
	maximumPrice,
	unit,
	domainStatus,
	priceTip,
	onBuy,
	onOffer,
	className,
}: MakeOfferProps) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const [price, setPrice] = useState<number | null>(null);
	const [isOfferFormEnabled, setIsOfferFormEnabled] = useState(false);
	const handleClickMakeOffer = useCallback(() => {
		setIsOfferFormEnabled(true);
		setTimeout(() => {
			inputRef.current?.focus();
		}, 0);
	}, [setIsOfferFormEnabled]);
	const handleClickOffer = useCallback(() => {
		onOffer?.(price || 0);
	}, [onOffer, price]);
	return (
		<div className={className}>
			{isOfferFormEnabled ? (
				<>
					<div className="text-sm text-primary-500 mb-3">I'll offer:</div>
					<div className="flex flex-wrap items-center gap-x-9 gap-y-4 pb-10">
						<div className="flex items-end">
							<PriceInput
								value={price}
								onChange={setPrice}
								exchangeRate={exchangeRate}
								minimum={minimumPrice}
								maximum={maximumPrice}
								ref={inputRef}
							/>
							<div className="text-[#d6d6d6] text-5lg font-primary py-3 ml-4 leading-none">
								{unit}
								{priceTip && (
									<InfoCircledIcon className="inline-block w-5 text-primary-500 ml-2" />
								)}
							</div>
						</div>
						<div className="">
							<SolidButton
								className="font-primary whitespace-nowrap text-base"
								onClick={handleClickOffer}>
								Offer <ArrowRightIcon className="w-[1em]" />
							</SolidButton>
						</div>
					</div>
				</>
			) : domainStatus === 'for-sale' ? (
				<div className="flex flex-wrap gap-2.5">
					<SolidButton
						className="font-primary whitespace-nowrap text-base w-auto"
						onClick={onBuy}>
						Buy <ArrowRightIcon className="w-[1em]" />
					</SolidButton>
					<Button
						className="text-base text-white font-primary border-white w-auto"
						onClick={handleClickMakeOffer}>
						Make an Offer
					</Button>
				</div>
			) : (
				<SolidButton
					className="font-primary whitespace-nowrap text-[10px] md:text-base"
					onClick={handleClickMakeOffer}>
					Make an Offer <ArrowRightIcon className="w-[1em]" />
				</SolidButton>
			)}
		</div>
	);
};
