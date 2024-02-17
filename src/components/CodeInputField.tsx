import React, { useId, useState } from 'react';
import clsx from 'clsx';

export type InputComponentProps = {
	incorrectAuthCode?: boolean;
	onPasteClicked: () => any;
	onSubmit?: () => any;
	value: string;
	onValueChanged?: (value: string) => any;
	status: 'SUBMITTED' | 'NOTSUBMITTED';
};

export const CodeInputField = ({
	status,
	incorrectAuthCode,
	value,
	onSubmit,
	onPasteClicked,
	onValueChanged,
}: InputComponentProps) => {
	const [isVisible, setIsVisible] = useState(false);
	const buttonKey = useId();
	return (
		<form className="relative w-[300px] max-h-[75px] flex flex-col justify-between ">
			<label
				className="relative block w-full h-[55px] rounded-[10px] px-[10px] bg-[#313131]"
				style={{
					backgroundColor:
						status === 'SUBMITTED' ? (incorrectAuthCode ? '#ff3c3c33' : '#0A4429') : '' ,
				}}
				onSubmit={onSubmit}>
				<input
					value={value}
					onChange={(evt) => onValueChanged?.(evt.target.value)}
					type={isVisible ? 'text' : 'password'}
					className='w-[80%] h-full outline-0 bg-transparent text-[15px] font-["Roboto_Mono"] font-medium tracking-[0.02em] text-white'
					placeholder="Paste code here"
				/>
			</label>
			{status === 'SUBMITTED' ? (
				<button
					key={buttonKey}
					onClick={onSubmit}
					className="absolute right-5 top-[17px] "
					type="button">
					<img
						src={incorrectAuthCode ? '/assets/Clipboard-Paste.svg' : '/assets/Done.svg'}
						alt="Clipboard-Paste image"
						role="img"
					/>
				</button>
			) : value?.trim().length ? (
				<>
					<button
						key={buttonKey}
						onClick={() => setIsVisible(!isVisible)}
						className="absolute right-5 top-[17px] "
						type="button">
						<img
							src={isVisible ? '/assets/eye-open.svg' : '/assets/Eye-None.svg'}
							alt="eyen image"
							role="img"
						/>
					</button>
				</>
			) : (
				<>
					<button
						key={buttonKey}
						onClick={onPasteClicked}
						className="absolute right-5 top-[17px] "
						type="button">
						<img
							src="/assets/Clipboard-Paste.svg"
							alt="Clipboard-Paste image"
							role="img"
						/>
					</button>
				</>
			)}
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
