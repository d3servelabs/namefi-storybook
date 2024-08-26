import React from 'react';
import { cn } from '../../../utils/cn';

export interface ButtonProps {
	children?: React.ReactNode;
	className?: string;
	onClick?: () => void;
	type?: 'primary' | 'tonal' | 'outlined';
	htmlType?: 'button' | 'submit' | 'reset';
	disabled?: boolean;
}

export const Button = ({
	children,
	className,
	type = 'primary',
	htmlType = 'button',
	...props
}: ButtonProps) => {
	return (
		<button
			className={cn(
				'flex justify-center items-center gap-x-[0.5em] px-5 py-2.5 rounded-full text-base font-primary select-none',
				type === 'primary' && 'ring-1 ring-primary-500 bg-brand-black text-white',
				type === 'outlined' &&
					'border border-white opacity-70 hover:opacity-100 text-white',
				type === 'tonal' && 'bg-primary-700 hover:bg-primary-500 text-brand-dark',
				className,
			)}
			type={htmlType}
			{...props}>
			{children}
		</button>
	);
};
