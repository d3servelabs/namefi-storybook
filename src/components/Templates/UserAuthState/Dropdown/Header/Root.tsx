import React, { useCallback, useState } from 'react';

import { useCopyToClipboard } from '@uidotdev/usehooks';
import { cn } from '../../../../../utils/cn';
import { CheckIcon, ClipboardIcon } from '@radix-ui/react-icons';

export default function Root({ userAddress, children }) {
	const [clipboard, copyToClipboard] = useCopyToClipboard();
	const [copied, setCopied] = useState(false);
	const handleCopy = useCallback(() => {
		copyToClipboard(userAddress);
		setCopied(true);
		setTimeout(() => setCopied(false), 3000);
	}, [userAddress, setCopied]);

	return (
		<div className="relative w-full h-17 flex justify-between items-center pb-5">
			<div className="relative h-full flex items-center gap-2 ">
				{children[0]}
				{children[1]}
				<button
					onClick={handleCopy}
					disabled={!userAddress}
					className={cn(
						'*:w-6 *:h-6 text-primary rounded-full p-2 hover:bg-green-600/20',
						!userAddress && 'grayscale-[50%] opacity-50',
						copied && 'bg-green-600/20 animate-ping [animation-duration:3500ms]',
					)}>
					{copied ? <CheckIcon /> : <ClipboardIcon />}
				</button>
			</div>
			<div className="h-full flex items-center justify-center gap-2">
				{children[2]}
				{children[3]}
			</div>
			<div className={'absolute -bottom-0 left-0 w-full h-0.5 bg-border-500'} />
		</div>
	);
}




