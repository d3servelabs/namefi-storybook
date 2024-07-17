import React, { useCallback, useId, useState } from 'react';
import clsx from 'clsx';
import ClipboardPasteSVG from '../../assets/Clipboard-Paste.svg';
import DoneSVG from '../../assets/Done.svg';
import EyeOpenSVG from '../../assets/eye-open.svg';
import EyeNoneSVG from '../../assets/Eye-None.svg';
import  { cn }  from "@namefi/utils"

export interface InputComponentProps {
	incorrectAuthCode?: boolean;
	onPasteClicked?: () => any;
	onSubmit?: () => any;
	value?: string;
	onValueChanged?: (value: string) => any;
	status?: 'SUBMITTED' | 'NOTSUBMITTED';
	className?: string;
}

export const CodeInputField = ({
	status,
	incorrectAuthCode,
	value,
	onSubmit,
	onPasteClicked,
	onValueChanged,
	className,
}: InputComponentProps) => {
	const [isVisible, setIsVisible] = useState(false);
	const buttonKey = useId();

	const handlePastClicked = useCallback(async () => {
		onPasteClicked?.();
		onValueChanged?.(await navigator.clipboard.readText());
	}, [onValueChanged, onPasteClicked]);

	return (
		<form className={cn('flex max-h-[75px] flex-col justify-between', className)}>
			<div className="flex h-[55px] w-full rounded-[10px] bg-[#313131] px-3.5">
				<label
					className="w-full flex-1"
					style={{
						backgroundColor:
							status === 'SUBMITTED'
								? incorrectAuthCode
									? '#ff3c3c33'
									: '#0A4429'
								: '',
					}}
					onSubmit={onSubmit}>
					<input
						value={value}
						onChange={(evt) => onValueChanged?.(evt.target.value)}
						type={isVisible ? 'text' : 'password'}
						className="h-full w-full bg-transparent font-primary text-sm font-medium tracking-[0.02em] text-white outline-0 placeholder:font-normal placeholder:text-grey"
						placeholder="Paste code here"
					/>
				</label>
				{status === 'SUBMITTED' ? (
					<button key={buttonKey} onClick={onSubmit} type="button">
						<img
							src={incorrectAuthCode ? ClipboardPasteSVG : DoneSVG}
							alt="Clipboard-Paste image"
							role="img"
						/>
					</button>
				) : value?.trim().length ? (
					<>
						<button
							key={buttonKey}
							onClick={() => setIsVisible(!isVisible)}
							type="button">
							<img
								src={isVisible ? EyeOpenSVG : EyeNoneSVG}
								alt="eyen image"
								role="img"
							/>
						</button>
					</>
				) : (
					<>
						<button key={buttonKey} onClick={handlePastClicked} type="button">
							<img src={ClipboardPasteSVG} alt="Clipboard-Paste image" role="img" />
						</button>
					</>
				)}
			</div>
			<p className='font-["Roboto_Mono"] text-xs font-normal'>
				{status === 'SUBMITTED' && (
					<span className={clsx(incorrectAuthCode ? 'text-warning' : 'text-primary-500')}>
						{incorrectAuthCode ? 'Auth-code incorrect.' : 'Auth-code correct.'}
					</span>
				)}
			</p>
		</form>
	);
};
