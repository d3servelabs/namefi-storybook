import React from 'react';
import { CopyIconButton, ShortAddress } from '../../../../Core';
import * as AuthHeader from '.';
export function Demo({
	userAddress,
	userLoading,
	chainId = 1,
}: {
	userAddress?: string;
	userLoading?: boolean;
	chainId?: number;
}) {
	return (
		<AuthHeader.Root>
			<>
				<AuthHeader.UserAvatarRoot>
					<img src={'/assets/maskuser.svg'} alt={'avatar'} />
				</AuthHeader.UserAvatarRoot>
				<AuthHeader.UserLabel>
					<ShortAddress address={userAddress} loading={userLoading} />
				</AuthHeader.UserLabel>
				<CopyIconButton value={userAddress || ''} />
			</>
			<>
				<AuthHeader.NetworkLogo chainId={chainId} />
				<AuthHeader.ConnectionStatus loading={userLoading} connected={!!userAddress}>
					{userAddress ? 'connected' : 'disconnected'}
				</AuthHeader.ConnectionStatus>
			</>
		</AuthHeader.Root>
	);
}

export default Demo;
