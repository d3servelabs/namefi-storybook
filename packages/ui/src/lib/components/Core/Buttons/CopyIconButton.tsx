import React, { useCallback, useState } from 'react';

import { useCopyToClipboard } from '@uidotdev/usehooks';
import { cn } from '../../../utils/cn';
import { CheckIcon, ClipboardIcon } from '@radix-ui/react-icons';

export function CopyIconButton({ value }: { value: string }) {
	const [clipboard, copyToClipboard] = useCopyToClipboard();
	const [copied, setCopied] = useState(false);
	const handleCopy = useCallback(() => {
		copyToClipboard(value);
		setCopied(true);
		setTimeout(() => setCopied(false), 3000);
	}, [value, setCopied]);

	return (
		<button
			onClick={handleCopy}
			disabled={!value}
			className={cn(
				'*:w-6 *:h-6 text-primary rounded-full p-2 hover:bg-green-600/20',
				!value && 'grayscale-[50%] opacity-50',
				copied && 'bg-green-600/20 animate-ping [animation-duration:3500ms]',
			)}>
			{copied ? <CheckIcon /> : <ClipboardIcon />}
		</button>
	);
}
