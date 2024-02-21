import React from 'react';
import clsx from 'clsx';
import {Eth} from '@web3uikit/icons'
import {NetworkLogo} from "@components/NetworkLogo";

export const UserAuthStateTileNetwork = ({
                                             network,
                                             ...props
                                         }: React.ComponentProps<'div'> & { network: number }) => {
    return (
        <NetworkLogo network={network} {...props}/>
    );
};