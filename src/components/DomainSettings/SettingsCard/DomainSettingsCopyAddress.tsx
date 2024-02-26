import ShortAddress from '@components/ShortAddress';
import { EthEmblem } from '@components/icons/EthEmblem';
import React, { useCallback, useState } from 'react';
import { CheckIcon, ClipboardCopyIcon } from '@radix-ui/react-icons';
import { cn } from '@utils/cn';

export default function DomainSettingsCopyAddress({
	address,
}: {
	address: string;
}) {
	const [success, setSuccess] = useState(false);
	const handleCopy = useCallback(() => {
		if (typeof window !== 'undefined') {
			window.navigator.clipboard.writeText(address)?.then(() => {
				setSuccess(true);
				setTimeout(() => setSuccess(false), 2000);
			});
		}
	}, [setSuccess, address]);

	return (
		<div className="w-full max-w-80 mx-auto h-15 relative bg-stone-950 rounded-2.5 p-5 flex flex-row items-center justify-between">
			<div className="text-white text-sm font-normal font-['Roboto_Mono'] flex items-center gap-2">
				<div className={'w-7 h-7 grid place-items-center'}>
					<EthEmblem />
				</div>
				<ShortAddress address={address} />
			</div>
			<div
				className={cn(
					'grid place-items-center cursor-pointer rounded-full hover:bg-green-600/10 active:bg-green-600/20 w-10 h-10 p-2.25 text-emerald-400',
					success && 'bg-green-600/20 animate-ping [animation-duration:3500ms]',
				)}
				onClick={handleCopy}>
				{success ? (
					<CheckIcon className={'w-full h-full'} />
				) : (
					<ClipboardCopyIcon className={'w-full h-full'} />
				)}
			</div>
		</div>
	);
}
