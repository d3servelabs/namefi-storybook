import clsx from 'clsx';
import React, { useMemo } from 'react';

export type BalanceProps = {
	balance?: number;
	fontSizeP?: string;
	fontSizeSpan?: string;
	color?: string;
	approxBalance?: boolean;
};

export const Balance = ({
	balance,
	approxBalance = false,
	fontSizeP,
	fontSizeSpan,
	color,
}: BalanceProps) => {
	const [fullTruncatedBalance, shortBalance,multiplier] = useMemo(() => {
		if (balance !== undefined && balance !== null) {
			let _balance = balance
			let modifier;
			if(_balance > 1000){
				_balance = _balance/1000
				modifier = 'K'
			}
			return [balance.toFixed(2).split('.'),_balance.toFixed(2).split('.'),modifier];
		}
		return [undefined, undefined,undefined];
	}, [balance]);

	return (
		<>
			{fullTruncatedBalance && (
				<>
					<p
						className="text-lg text-white tracking-wide font-normal font-primary"
						style={{fontSize: fontSizeP, color,}}>
						{shortBalance[0]}.
						<span className="text-sm" style={{fontSize: fontSizeSpan,}}>
							{shortBalance[1]}{multiplier}
						</span>
					</p>
					{approxBalance && (
						<p className="font-primary mt-2 font-normal text-[#d6d6d6] text-sm tracking-wider">
							≈${fullTruncatedBalance[0]}.{fullTruncatedBalance[1]}
						</p>
					)}
				</>
			)}
		</>
	);
};
