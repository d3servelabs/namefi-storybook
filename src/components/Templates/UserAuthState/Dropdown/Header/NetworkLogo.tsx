import {NetworkLogo as Logo} from '../../../../Core';
import React from 'react';

export default function NetworkLogo({chainId}) {
    return <Logo network={chainId} className={'w-6 h-6'}/>;
}