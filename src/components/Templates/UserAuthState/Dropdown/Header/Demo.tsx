import React from 'react';
import {ShortAddress} from "../../../../Core";
import * as Header from '.'
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
		<Header.Root userAddress={userAddress}>
			<Header.UserAvatarRoot>
				<img src={'/assets/maskuser.svg'} alt={'avatar'} />
			</Header.UserAvatarRoot>
			<Header.UserLabel>
				<ShortAddress address={userAddress} loading={userLoading} />
			</Header.UserLabel>
			<Header.NetworkLogo chainId={chainId} />
			<Header.ConnectionStatus
				loading={userLoading}
				connected={!!userAddress}>
				{userAddress ? 'connected' : 'disconnected'}
			</Header.ConnectionStatus>
		</Header.Root>
	);
}

export default Demo;
