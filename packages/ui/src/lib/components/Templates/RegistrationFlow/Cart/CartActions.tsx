import { Button, GhostButton, SolidButton } from '../../../Core';
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import React, { ComponentProps } from 'react';
import  { cn }  from "@namefi/utils"

export function Root({ className, children, ...props }: ComponentProps<'div'>) {
	return (
		<div
			{...props}
			className={cn(
				'relative max-w-[500px] h-12 flex justify-between items-center',
				className,
			)}>
			<div>{children?.[0] || children}</div>

			<div>{children?.[1]}</div>
		</div>
	);
}

export function BackButton({ className, children, ...props }: ComponentProps<typeof GhostButton>) {
	return (
		<GhostButton {...props} className={cn('w-auto', className)}>
			{children || (
				<>
					<ArrowLeftIcon className="w-6 h-6 text-primary" /> Back
				</>
			)}
		</GhostButton>
	);
}

export function CheckoutButton({
	className,
	children,
	...props
}: ComponentProps<typeof SolidButton>) {
	return (
		<SolidButton {...props} className={cn('w-auto', className)}>
			{children || (
				<>
					{' '}
					Check out <ArrowRightIcon className="w-6 h-6" />
				</>
			)}
		</SolidButton>
	);
}

export function ConnectWallet({ className, children, ...props }: ComponentProps<typeof Button>) {
	return (
		<Button {...props} className={cn('w-auto', className)}>
			{children || (
				<>
					{' '}
					Connect Wallet <ArrowRightIcon className="w-6 h-6 text-primary" />
				</>
			)}
		</Button>
	);
}
