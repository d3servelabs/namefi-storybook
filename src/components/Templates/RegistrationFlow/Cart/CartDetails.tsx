import { usePriceFormatter } from '../../../../hooks/UsePriceFormatter';
import { NetworkLogo } from '../../../Core';
import TokenIcon from '../../../Core/icons/TokenIcon';
import React, { ComponentProps } from 'react';
import { cn } from '../../../../utils/cn';
import { isNil } from 'ramda';

export type CardDetailsProps = ComponentProps<'div'> & {
	price: number;
	availableTokens?: number;
	networkFeeETH?: number;
	networkFeeUSD?: number;
};
export default function CartDetails({
	className,
	price,
	availableTokens,
	networkFeeETH,
	networkFeeUSD,
	...props
}: CardDetailsProps) {
	const detailedPrice = usePriceFormatter(price);
	const detailedAvailableTokens = usePriceFormatter(availableTokens);

	return (
		<>
			<div
				{...props}
				className={cn(
					'relative w-full pt-4 grid grid-cols-[minmax(auto,100%)_1.25rem_minmax(0px,auto)] gap-x-4 gap-y-2',
					className,
				)}>
				{!!networkFeeETH && (
					<>
						<div className={'contents'}>
							<div className={'text-sm font-medium text-white w-full'}>
								Network Fees:
							</div>
							<NetworkLogo network={1} className={'w-5 h-5'} />
							<div className={'text-xs text-primary '}>
								<span className={'line-through'}>({networkFeeETH}≈{networkFeeUSD}$)</span>
								<br />
								<mark className={'text-xs bg-primary'}>Namefi Discount</mark>
							</div>
						</div>
					</>
				)}
				<div className={`col-span-full h-[1.5px] w-full left-0 bottom-0 bg-border-500`} />
				<div className="contents font-normal tracking-wider text-white">
					<p className="text-sm ">Total:</p>
					<TokenIcon className={'w-5 h-5 my-auto'} />
					<p className="text-lg break-keep">
						{detailedPrice.wholeAmount}.
						<span className="text-sm">{detailedPrice.fractionalAmount}</span>{' '}
						{detailedPrice.multiplier}
						<span className="text-sm font-primary">$NFSC</span>
					</p>
				</div>
				{!isNil(availableTokens) && (
					<div className="contents font-normal tracking-wider text-white">
						<p className="text-sm ">Available:</p>
						<TokenIcon className={'w-5 h-5 my-auto'} />
						<p className="text-lg break-keep">
							{detailedAvailableTokens.wholeAmount}.
							<span className="text-sm">
								{detailedAvailableTokens.fractionalAmount}
							</span>{' '}
							{detailedAvailableTokens.multiplier}
							<span className="text-sm font-primary">$NFSC</span>
						</p>
					</div>
				)}
			</div>
		</>
	);
}
