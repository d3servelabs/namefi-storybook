import { cn } from '../../../utils/cn';
import React from 'react';
import { OpenInNewWindowIcon } from '@radix-ui/react-icons'

export default function DomainSettingsWebView({
	src,
	children,
	className,
	...props
}: React.ComponentProps<'div'> & { src?: string }) {
	return (
		<div className={cn('w-[20rem] h-[12.5rem] rounded-5 overflow-hidden group', className)}>
			<a
				href={src}
				target={'_blank'}
				className={
					'bg-white/10 group-hover:grid hidden absolute w-[20rem] h-[12.5rem] z-10 rounded-5  place-items-center'
				}>
				<OpenInNewWindowIcon className={'text-emerald-100 w-16 h-16 p-4 bg-emerald-600/30  hover:bg-emerald-600/60 cursor-pointer rounded-full'}/>
			</a>
			<iframe
				scrolling="no"
				src={src}
				className={'w-[100rem] h-[62.5rem] scale-[0.2] origin-top-left '}></iframe>
		</div>
	);
} 
