import React, { useMemo } from 'react';
import { cn } from '../../utils/cn';
import { EthereumLogo } from './icons/EthereumLogo';
import * as net from 'net';
import PolygonNetwork from './icons/PolygonNetwork';
import BaseNetwork from './icons/BaseNetwork';
import EthNetwork from './icons/EthNetwork';
import {AlertTriangleIcon} from "lucide-react";

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
				'w-12 h-12 aspect-square rounded-full text-center bg-brand-dark',
				testnet && 'grayscale',
				props.className,
			)}
			>
			{[1, 11155111, 5].includes(network as any) ? (
				<EthNetwork className={cn('w-full h-full')} />
			) : [137, 80001].includes(network as any) ? (
				<PolygonNetwork className={cn('w-full h-full')} />
			) : [8453, 84531,84532].includes(network as any) ? (
				<BaseNetwork className={cn('w-full h-full')} />
			) : (
				<div className={'flex items-center justify-center h-full w-full text-primary'}>
					{/*<span className={'text-2xl font-bold text-slate-100/90'}>?</span>*/}
					<AlertTriangleIcon width={50} height={50} className={'w-7/12 h-7/12 aspect-square'} />
				</div>
			)}
		</div>
	);
};

export default NetworkLogo;
