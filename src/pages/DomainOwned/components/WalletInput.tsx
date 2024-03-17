import React, { useCallback } from 'react';
import { cn } from '../../../utils/cn';
import MetamaskSVG from '../../../assets/metamask.svg';
import { PasteIcon } from '../../../components/Core/icons/Paste';

export interface WalletInputProps {
	value?: string;
	onChange?: (value: string) => void;
	placeholder?: string;
	className?: string;
}

export const WalletInput = ({ value, onChange, placeholder, className }: WalletInputProps) => {
	const handlePasteClick = useCallback(async () => {
		try {
			const text = await navigator.clipboard.readText();
			onChange?.(text);
		} catch {}
	}, [onChange]);
	return (
		<div className={cn('flex w-full rounded-[10px] p-2.5 bg-[#313131]', className)}>
			<img className="ml-1 mr-3" src={MetamaskSVG} alt="MetaMask" role="img" />
			<label className="flex-1 w-full">
				<input
					value={value}
					onChange={(evt) => onChange?.(evt.target.value)}
					className="w-full h-full outline-0 border-0 bg-inherit text-xs text-[#efefef] placeholder:text-[#797979] font-primary"
					placeholder={placeholder}
				/>
			</label>
			<button type="button" onClick={handlePasteClick} className="right-0 top-[18px]">
				<PasteIcon className="text-xl text-primary-500 stroke-[0.01]" />
			</button>
		</div>
	);
};
