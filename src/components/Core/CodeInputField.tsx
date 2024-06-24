import React, { useCallback, useId, useState } from 'react';
import clsx from 'clsx';
import ClipboardPasteSVG from '../../../public/assets/Clipboard-Paste.svg';
import DoneSVG from '../../../public/assets/Done.svg';
import EyeOpenSVG from '../../../public/assets/eye-open.svg';
import EyeNoneSVG from '../../../public/assets/Eye-None.svg';
import { cn } from '../../utils/cn';

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
		<form className={cn('max-h-[75px] flex flex-col justify-between ', className)}>
			<div className="w-full h-[55px] rounded-[10px] px-3.5 bg-[#313131] flex">
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
						className="w-full h-full outline-0 bg-transparent text-white placeholder:text-grey text-sm font-primary font-medium placeholder:font-normal tracking-[0.02em]"
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
			<p className='text-xs font-normal font-["Roboto_Mono"] '>
				{status === 'SUBMITTED' && (
					<span className={clsx(incorrectAuthCode ? 'text-warning' : 'text-primary-500')}>
						{incorrectAuthCode ? 'Auth-code incorrect.' : 'Auth-code correct.'}
					</span>
				)}
			</p>
		</form>
	);
};
