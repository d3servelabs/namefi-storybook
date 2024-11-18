import React, {
	useState,
	useCallback,
	useRef,
	useImperativeHandle,
	forwardRef,
	type Ref,
} from 'react';
import ArrowRightIcon from '../../common/Icon/Outlined/ArrowRight';
import { cn } from '../../../utils/cn';

const DEFAULT_INVALID_MESSAGE = 'Invalid input';

export interface InlineInputFormProps {
	validator?: (value: string) => void;
	description?: string;
	placeholder?: string;
	icon?: React.ReactNode;
	onFocus?: () => void;
	onBlur?: () => void;
	onSubmit?: (value: string) => void;
	className?: string;
}

export interface InlineInputFormRef {
	scrollIntoView: () => void;
	focus: () => void;
	blur: () => void;
	submit: () => void;
}

export const InlineInputForm = forwardRef(function InlineInputForm(
	{
		validator,
		description,
		placeholder,
		icon = <ArrowRightIcon />,
		onFocus,
		onBlur,
		onSubmit,
		className,
	}: InlineInputFormProps,
	ref: Ref<InlineInputFormRef>,
) {
	const inputRef = useRef<HTMLInputElement>(null);
	const [isFocused, setIsFocused] = useState<boolean>(false);
	const [value, setValue] = useState('');
	const [isValid, setIsValid] = useState<boolean>(true);
	const [errorMessage, setErrorMessage] = useState<string>('');

	const message = errorMessage || description;

	const handleChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const { value } = e.target;
			setValue(value);
			if (validator) {
				try {
					validator?.(value);
					setIsValid(true);
					setErrorMessage('');
				} catch (error) {
					setIsValid(false);
					setErrorMessage(
						error instanceof Error ? error.message : DEFAULT_INVALID_MESSAGE,
					);
				}
			} else {
				setIsValid(true);
				setErrorMessage('');
			}
		},
		[setValue, validator],
	);

	const handleFocus = useCallback(() => {
		setIsFocused(true);
		onFocus?.();
	}, [onFocus]);

	const handleBlur = useCallback(() => {
		setIsFocused(false);
		onBlur?.();
	}, [onBlur]);

	const handleSubmit = useCallback(
		(e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			if (!isValid) {
				return;
			}
			inputRef.current?.blur();
			onSubmit?.(value);
		},
		[isValid, value, onSubmit],
	);

	useImperativeHandle(
		ref,
		() => ({
			scrollIntoView() {
				inputRef.current?.scrollIntoView();
			},
			focus() {
				inputRef.current?.focus();
			},
			blur() {
				inputRef.current?.blur();
			},
			submit() {
				handleSubmit({ preventDefault: () => undefined } as any);
			},
		}),
		[handleSubmit],
	);

	return (
		<form className={cn('flex flex-col gap-5', className)} noValidate onSubmit={handleSubmit}>
			<div
				role="control"
				className={cn(
					'flex gap-3 rounded-full px-1 py-1 transition',
					isValid
						? isFocused
							? 'bg-white/8 ring-1 ring-emerald-400'
							: 'bg-white/5'
						: 'bg-white/8 ring-1 ring-red-500',
				)}>
				<input
					placeholder={placeholder}
					className="w-full bg-transparent px-8 text-sm font-normal caret-emerald-400 outline-none placeholder:text-gray-400"
					value={value}
					onChange={handleChange}
					onFocus={handleFocus}
					onBlur={handleBlur}
					ref={inputRef}
				/>
				<button
					role="button"
					className={cn(
						'rounded-full p-3 text-sm transition',
						isValid
							? isFocused
								? 'bg-emerald-400 text-white hover:bg-emerald-500'
								: 'text-gray-600 hover:bg-emerald-400 hover:text-white'
							: 'bg-red-500 text-white hover:bg-red-600',
					)}>
					{icon}
				</button>
			</div>
			{message && (
				<div
					role="message"
					className={cn(
						'px-10 font-mono text-xs',
						isValid ? 'text-gray-600' : 'text-red-500',
					)}>
					{message}
				</div>
			)}
		</form>
	);
});
