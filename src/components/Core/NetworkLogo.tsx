import React, { useMemo } from 'react';
import { cn } from '../../utils/cn';
import { EthereumLogo } from './icons/EthereumLogo';
import * as net from 'net';
import PolygonNetwork from './icons/PolygonNetwork';
import BaseNetwork from './icons/BaseNetwork';
import EthNetwork from './icons/EthNetwork';

export const NetworkLogo = ({
	network,
	...props
}: React.ComponentProps<'div'> & {
	network: number;
}) => {
	const testnet = React.useMemo(() => {
		return [11155111, 5, 80001, 84531,84532].includes(network as any);
	}, [network]);
	return (
		<div
			{...props}
			className={cn(
				'w-12 h-12 aspect-square rounded-full text-center',
				testnet && 'grayscale',
				props.className,
			)}
			style={{
				background: '#617DEA',
			}}>
			{[1, 11155111, 5].includes(network as any) ? (
				<EthNetwork className={cn('w-full h-full')} />
			) : [137, 80001].includes(network as any) ? (
				<PolygonNetwork className={cn('w-full h-full')} />
			) : [8453, 84531,84532].includes(network as any) ? (
				<BaseNetwork className={cn('w-full h-full')} />
			) : (
				<div className={'grid place-items-center h-full w-full'}>
					<span className={'text-2xl font-bold text-slate-100/90'}>?</span>
				</div>
			)}
		</div>
	);
};

export default NetworkLogo;
