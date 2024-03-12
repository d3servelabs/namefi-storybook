import React, { ComponentProps } from 'react';
import clsx from 'clsx';

export type WhoisFormRootProps = ComponentProps<'form'> & {
	children: React.ReactNode;
	className?: string;
};

export const WhoisFormRoot = ({ children, className, ...props }: WhoisFormRootProps) => {
	return (
		<div
			className={clsx(
				'w-full py-8 flex flex-col justify-center items-center bg-brand-black rounded-2xl',
			)}>
			<form
				{...props}
				className={clsx(
					'w-[493px] h-full flex flex-col items-end gap-4 text-sm text-white font-normal tracking-wider',
					className,
				)}>
				{children}
			</form>
		</div>
	);
};
