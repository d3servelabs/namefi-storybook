import React, { useState, useCallback } from 'react';
import { UpdateIcon } from '@radix-ui/react-icons';
import { CornerDownLeft, ArrowRight } from 'lucide-react';
import { Button } from './Button';
import  { cn }  from "@namefi/utils"

export interface SubscriptionInlineFormPayload {
	email: string;
}

export interface SubscriptionInlineFormProps {
	email?: string;
	onEmailChange?: (email: string) => void;
	onSubmit?: ({ email }: SubscriptionInlineFormPayload) => void;
	submitText?: string;
	successText?: string;
	placeholder?: string;
	loading?: boolean;
	submitted?: boolean;
	disabled?: boolean;
	className?: string;
}

export const SubscriptionInlineForm = ({
	email,
	onEmailChange,
	onSubmit,
	submitText = 'Join Waitlist',
	successText = 'Joined!',
	placeholder = 'Enter your email',
	loading,
	submitted,
	className,
}: SubscriptionInlineFormProps) => {
	const inputRef = React.useRef<HTMLInputElement>(null);
	const [isFocused, setIsFocused] = useState(false);
	const [lastSubmittedPayload, setLastSubmittedPayload] = useState<SubscriptionInlineFormPayload>(
		{ email: '' },
	);

	const handleFocus = useCallback(() => {
		setIsFocused(true);
	}, [setIsFocused]);
	const handleBlur = useCallback(() => {
		setIsFocused(false);
	}, [setIsFocused]);
	const handleChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			onEmailChange?.(event?.target?.value);
		},
		[onEmailChange],
	);

	const submit = useCallback(() => {
		if (!email) {
			return;
		}
		if (lastSubmittedPayload.email === email) {
			inputRef.current?.blur();
			return;
		}
		const payload = { email };
		setLastSubmittedPayload(payload);
		onSubmit?.(payload);
		inputRef.current?.blur();
	}, [onSubmit, lastSubmittedPayload, setLastSubmittedPayload, email]);
	const handleKeyDown = useCallback(
		(event: React.KeyboardEvent<HTMLInputElement>) => {
			if (event.key === 'Enter') {
				submit();
			}
		},
		[submit],
	);
	return (
		<div
			className={cn(
				'flex justify-between items-center rounded-full h-14 overflow-hidden bg-white ring-1 ring-black-1000 text-black-400 font-third',
				loading
					? 'text-black-200'
					: isFocused
					? 'ring-primary-500'
					: submitted
					? 'ring-primary-500 bg-black-brand text-black-500'
					: null,
				className,
			)}>
			<input
				value={email}
				onChange={handleChange}
				onFocus={handleFocus}
				onBlur={handleBlur}
				onKeyDown={handleKeyDown}
				className="flex-1 w-full outline-0 bg-transparent px-8 text-base font-medium tracking-wider placeholder:font-normal placeholder:italic"
				type="text"
				placeholder={placeholder}
				disabled={loading}
				ref={inputRef}
			/>
			<div className="flex items-center h-full px-6 tracking-widest text-lg text-black-1000 select-none">
				{loading ? (
					<UpdateIcon className="animate-spin duration-500" />
				) : !isFocused && submitted ? (
					<span className="text-primary-500 text-base">{successText}</span>
				) : (
					<button
						className="flex items-center h-full cursor-pointer"
						type="button"
						onClick={submit}>
						<span>{submitText}</span>
						<CornerDownLeft className="ml-[0.5em] w-4" />
					</button>
				)}
			</div>
		</div>
	);
};

export type SubscriptionDisplay = 'inline-form' | 'button';
export type SubscriptionProps = SubscriptionInlineFormProps & {
	buttonText?: string;
	display?: SubscriptionDisplay;
	onDisplayChange?: (display: SubscriptionDisplay) => void;
};

export const Subscription = ({
	display = 'button',
	onDisplayChange,
	buttonText = 'Join Waitlist',
	className,
	...props
}: SubscriptionProps) => {
	const handleClickButton = useCallback(() => {
		onDisplayChange?.('inline-form');
	}, [onDisplayChange]);
	return display === 'inline-form' ? (
		<SubscriptionInlineForm {...props} className={className} />
	) : (
		<Button
			type="primary"
			className={cn(
				'h-14 px-8 text-lg font-third tracking-widest select-none group',
				className,
			)}
			onClick={handleClickButton}>
			{buttonText}
			<ArrowRight className="transition w-4.5 h-4.5 text-primary-500 group-hover:translate-x-2" />
		</Button>
	);
};
