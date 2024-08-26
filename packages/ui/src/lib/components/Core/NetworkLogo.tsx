import React, { useMemo } from 'react';
import { cn } from '../../utils/cn';
import PolygonNetwork from './icons/PolygonNetwork';
import BaseNetwork from './icons/BaseNetwork';
import EthNetwork from './icons/EthNetwork';
import { AlertTriangleIcon } from 'lucide-react';
import EthNetworkBwIcon from './icons/EthNetworkBwIcon';
import PolygonNetworkBwIcon from './icons/PolygonNetworkBwIcon';
import BaseNetworkBwIcon from './icons/BaseNetworkBwIcon';

export const NetworkLogo = ({
	network,
	blackWhite = false,
	...props
}: React.ComponentProps<'div'> & {
	network: number;
	blackWhite?: boolean;
}) => {
	const testnet = React.useMemo(() => {
		return [11155111, 5, 80001, 84531, 84532].includes(network as any);
	}, [network]);
	return (
		<div
			{...props}
			className={cn(
				blackWhite? 'w-10.5 h-10.5' : 'w-12 h-12',
				'aspect-square rounded-full text-center bg-brand-dark',
				testnet && 'grayscale',
				props.className,
			)}>
			{[1, 11155111, 5].includes(network as any) ? (
				blackWhite ? (
					<EthNetworkBwIcon className={cn('w-full h-full')} />
				) : (
					<EthNetwork className={cn('w-full h-full')} />
				)
			) : [137, 80001].includes(network as any) ? (
				blackWhite ? (
					<PolygonNetworkBwIcon className={cn('w-full h-full')} />
				) : (
					<PolygonNetwork className={cn('w-full h-full')} />
				)
			) : [8453, 84531, 84532].includes(network as any) ? (
				blackWhite ? (
					<BaseNetworkBwIcon className={cn('w-full h-full')} />
				) : (
					<BaseNetwork className={cn('w-full h-full')} />
				)
			) : (
				<div className={'flex items-center justify-center h-full w-full text-primary'}>
					{/*<span className={'text-2xl font-bold text-slate-100/90'}>?</span>*/}
					<AlertTriangleIcon
						width={50}
						height={50}
						className={'w-7/12 h-7/12 aspect-square'}
					/>
				</div>
			)}
		</div>
	);
};

export default NetworkLogo;
