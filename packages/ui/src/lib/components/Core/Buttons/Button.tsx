import React from 'react';
import { cn } from '../../../utils/cn';
import { ButtonLoadingContent } from './ButtonLoadingContent';
import { ButtonText } from './ButtonText';

export type ButtonProps = React.ComponentPropsWithRef<'button'> &
	Partial<{
		borderColor: string;
		backgroundColor: string;
		borderWidth: string;
		color: string;
		loading?: boolean;
		loadingContent?: React.ReactNode;
	}>;
export const Button = Object.assign(
	React.forwardRef<HTMLButtonElement, ButtonProps>(
		(
			{
				loading,
				loadingContent,
				children,
				color,
				borderWidth,
				backgroundColor,
				borderColor,
				disabled,
				className,
				...props
			},
			ref,
		) => {
			return (
				<button
					ref={ref}
					{...(props || {})}
					type="button"
					disabled={disabled}
					aria-disabled={disabled}
					className={cn(
						'flex w-full items-center justify-center gap-[.75em] rounded-full px-[1.625em] py-[0.625em] text-lg text-white ring-[.1em] ring-inset ring-white enabled:hover:bg-primary-dark/10 enabled:active:bg-primary-dark/30',
						disabled && 'cursor-not-allowed opacity-30',
						className,
					)}
					style={props.style}>
					{loading
						? loadingContent ?? <ButtonLoadingContent>Loading...</ButtonLoadingContent>
						: children}
				</button>
			);
		},
	),
	{
		Text: ButtonText,
		LoadingContent: ButtonLoadingContent,
	},
);
