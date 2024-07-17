import { Button, ButtonProps } from '../../Core/Buttons/Button';
import React, { ComponentProps, ReactNode } from 'react';
import { LoadingAnimation } from '../../Core/LoadingAnimation';
import YellowCat from '../../../assets/yellow-cat.png';
import  { cn }  from "@namefi/utils"
import {LinkIcon} from "../../Core/icons/Link";

export type Props = ComponentProps<'div'> ;

export const Root = ({ className, children, ...props }: Props) => {
	return (
		<div
			{...props}
			className={cn(
				'relative w-full flex flex-col justify-center items-center gap-9 min-w-[500px]',className
			)}>
			<div className="w-full relative flex flex-col gap-3 tracking-wider">
				<p className="font-semibold text-white text-xl">You’re all set for now.</p>
				<p className="font-normal text-brand-300 text-sm">
					Your domain will soon appear in your wallet.
				</p>
			</div>
			<div className={'relative w-full flex flex-col'}>
				<div className={'relative w-full flex flex-col-reverse min-h-[60px]'}>
					<img src={YellowCat} className={'absolute right-[30px] -bottom-2 w-[160px]'} />
					<LoadingAnimation />
				</div>
				{children?.[1]}
			</div>
			{children?.[0] || children}
		</div>
	);
};

export function LoadingBarSubtitle({href}){
	return <div className={'text-sm text-gray-200 leading-wide py-1'}>
		Transaction failed. View on Etherscan. <a href={href}><LinkIcon className={'text-primary hover:text-primary-60'}/></a>
	</div>
}
export function Actions({ className, children, ...props }: ComponentProps<'div'>) {
	return (
		<div {...props} className={cn('w-full flex flex-row justify-between items-center',className)}>
			{children}
		</div>
	);
}

export function ActionsButton({ className, children, ...props }: ButtonProps) {
	return (
		<Button {...props} className={cn('text-md w-auto',className)}>
			{children}
		</Button>
	);
}
