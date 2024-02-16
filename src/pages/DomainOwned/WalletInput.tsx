import React from 'react';

export type WalletInputProps = {
	onInputValueChanged?: (value: string) => any;
	onPasteClicked?: () => any;
	inputValue?: string;
};

export const WalletInput = ({ onInputValueChanged, inputValue, onPasteClicked }: WalletInputProps) => {
	return (
		<div className="relative w-full h-[83px] flex flex-col justify-between ">
			<p className="font-normal text-sm tracking-[0.05em] text-[#d9d9d9] ">Recipient Wallet</p>
			<div className="h-[55px] w-full rounded-[10px] px-[10px] bg-[#313131]">
				<form className="relative w-full h-full bg-inherit">
					<img className="absolute top-[10px]" src="/assets/metamask.svg" alt="metamask img" role="img" />
					<label className="w-full">
						<input
							value={inputValue}
							onChange={(evt) => onInputValueChanged?.(evt.target.value)}
							className='w-full h-full outline-0 px-[40px] border-0 bg-inherit text-[#797979] font-medium font-["Roboto_Mono"]'
							type="text"
							placeholder="Paste wallet address"
						/>
					</label>
					<button type="button" onClick={onPasteClicked} className="absolute right-0 top-[18px]">
						<img src="/assets/group.svg" alt="group img" role="img" />
					</button>
				</form>
			</div>
		</div>
	);
};
