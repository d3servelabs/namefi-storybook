import React, { ComponentProps, useMemo } from 'react';
import { cn } from '../../utils/cn';

export type BalanceProps = {
	balance?: number;
	fontSizeP?: string;
	fontSizeSpan?: string;
	color?: string;
	approxBalance?: boolean;
	approxBalanceClassName?: string;
	horizontal?: boolean;
} & ComponentProps<'p'>;

export const Balance = ({
	balance,
	approxBalance = false,
	horizontal = false,
	fontSizeP,
	fontSizeSpan,
	color,
	className,
	approxBalanceClassName,
}: BalanceProps) => {
	const [fullTruncatedBalance, shortBalance, multiplier] = useMemo(() => {
		if (balance !== undefined && balance !== null) {
			let _balance = balance;
			let modifier;
			if (_balance > 1000) {
				_balance = _balance / 1000;
				modifier = 'K';
			}
			return [balance.toFixed(2).split('.'), _balance.toFixed(2).split('.'), modifier];
		}
		return [undefined, undefined, undefined];
	}, [balance]);

	return (
		<>
			{fullTruncatedBalance && (
				<div className={cn(horizontal && 'flex flex-row gap-0.5 items-center')}>
					<p
						className={cn(
							'text-lg text-white tracking-wide font-normal font-primary',
							className,
						)}
						style={{ fontSize: fontSizeP, color }}>
						{shortBalance[0]}.
						<span className="text-sm" style={{ fontSize: fontSizeSpan }}>
							{shortBalance[1]}
							{multiplier}
						</span>
					</p>
					{approxBalance && (
						<p
							className={cn(
								'font-primary font-normal text-[#d6d6d6] text-sm tracking-wider',
								horizontal ? undefined : 'mt-2',
								approxBalanceClassName,
							)}>
							≈${fullTruncatedBalance[0]}.{fullTruncatedBalance[1]}
						</p>
					)}
				</div>
			)}
		</>
	);
};
