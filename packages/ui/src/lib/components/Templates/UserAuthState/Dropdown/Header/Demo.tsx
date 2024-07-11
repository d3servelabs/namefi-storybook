import React from 'react';
import { CopyIconButton, ShortAddress } from '../../../../Core';
import * as Header from '.';
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
		<Header.Root>
			<>
				<Header.UserAvatarRoot>
					<img src={'/assets/maskuser.svg'} alt={'avatar'} />
				</Header.UserAvatarRoot>
				<Header.UserLabel>
					<ShortAddress address={userAddress} loading={userLoading} />
				</Header.UserLabel>
				<CopyIconButton value={userAddress || ''} />
			</>
			<>
				<Header.NetworkLogo chainId={chainId} />
				<Header.ConnectionStatus loading={userLoading} connected={!!userAddress}>
					{userAddress ? 'connected' : 'disconnected'}
				</Header.ConnectionStatus>
			</>
		</Header.Root>
	);
}

export default Demo;
