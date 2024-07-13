import React from 'react';
import { NetworkLogo } from '../../../Core/NetworkLogo';

const UserAuthStateTileNetwork = ({
	network,
	...props
}: React.ComponentProps<'div'> & { network: number }) => {
	return <NetworkLogo network={network} {...props} />;
};

export default UserAuthStateTileNetwork