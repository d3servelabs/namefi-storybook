import React, { ComponentProps } from 'react';
import TokenIcon from '../../../../assets/tokenicon.svg';
import InfoIcon from '../../../../assets/notification.svg';
import { cn } from '../../../../utils/cn';

export type DomainCreditCardProps = ComponentProps<'div'> & {
	username?: string;
};

export const UserBalanceCardRoot = ({ username, children, className }: DomainCreditCardProps) => {
	return (
		<div
			className={cn(
				'relative rounded-5 flex flex-col justify-between items-end w-[clamp(300px,100%,650px)] gap-6 md:gap-10',
				className,
			)}>
			<div className="w-full flex items-center justify-between">
				<p className="font-bold text-5.25lg text-[#d9d9d9] tracking-[0.05em] ">
					Your Credit
				</p>
				{children?.[0]}
			</div>
			<div className="flex flex-col w-full min-h-[289px] px-3 py-5 md:p-7 rounded-5 border border-[#C6EEDB] items-end justify-between relative bg-black-900 ">
				<div className="max-w-full w-full h-16 flex justify-between items-center">
					<div className='font-medium text-4lg md:text-6lg  font-["Roboto_Mono"] text-white overflow-ellipsis break-all'>
						{username}
					</div>
					<img className="w-10 md:w-16" src={TokenIcon} alt="Token Icon" role="img" />
				</div>
				<div className="w-full h-18.75">
					<div className="h-full flex justify-start items-start gap-4">
						<div className="h-full flex flex-col pt-3">{children?.[1]}</div>
						<div className="h-15 flex items-center gap-2">
							<p className='font-["Roboto_Mono"] font-normal text-white text-[25px] tracking-[0.05em]'>
								$NFSC
							</p>
							{/*<img src={InfoIcon} alt="notification" role="img" />*/}
						</div>
					</div>
				</div>
				<div className=" ">
					<p className='font-["Roboto_Mono"] font-normal text-white text-sm tracking-[0.05em]'>
						Beta Version
					</p>
				</div>
				<div
					className={
						'absolute w-full h-full top-2 left-2 ring-1 ring-primary-20/70 blur-[.5px] rounded-5 z-[-1]'
					}
				/>
			</div>
		</div>
	);
};
