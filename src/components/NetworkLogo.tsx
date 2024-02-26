import React from 'react';
import { cn } from '@utils/cn';

export const NetworkLogo = ({
	network,
	...props
}: React.ComponentProps<'div'> & { network: number }) => {
	//todo
	return (
		<div
			{...props}
			className={cn('w-12 h-12 aspect-square rounded-full text-center', props.className)}
			style={{
				background: '#617DEA',
			}}>
			{network === 1 ? (
				<img src="/assets/eth-icon.svg" alt="eth logo" role="img" className={'w-12 h-12'} />
			) : [1, 11155111, 5].includes(network) ? (
				<img
					src="/assets/eth-icon.svg"
					alt="eth logo"
					role="img"
					className={'w-12 h-12 grayscale-1'}
				/>
			) : (
				<div className={'grid place-items-center h-full w-full'}>
					<span className={'text-2xl font-bold text-slate-100/90'}>?</span>
				</div>
			)}
		</div>
	);
};

export default NetworkLogo;
