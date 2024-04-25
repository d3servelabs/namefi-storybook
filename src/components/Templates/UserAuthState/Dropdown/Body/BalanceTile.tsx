import { Balance } from '../../../../Core/Balance';
import TokenIcon from '../../../../Core/icons/TokenIcon';
import React,{ ComponentProps } from 'react';
import { cn } from '../../../../../utils/cn';

function BalanceTile({ balance,approxBalance = true, loading, className, children, ...props }: ComponentProps<'div'> & {balance:number,approxBalance?:boolean, loading?:boolean}) {
	return (
		<div
			{...props}
			className={cn(
				'w-full flex flex-row justify-between border-t-[2px] border-neutral-400/30 p-4 items-center',
				className,
			)}>
			<div className={'h6 text-primary-light  align-middle'}>$NFSC Balance</div>
			<div className={'flex flex-row justify-start items-center gap-2.25'}>
				<TokenIcon className={'w-6 h-6'} />
				{loading? (
					<div className={'rounded-full animate-pulse bg-primary-light min-w-[15ch] leading-normal'}/>
					) : (
					<Balance
						horizontal
						balance={balance}
						className={'text-primary h5'}
						approxBalance
						approxBalanceClassName={'h6 text-[#797979] '}
					/>

				)}

			</div>
		</div>
	);
}

export default BalanceTile;
