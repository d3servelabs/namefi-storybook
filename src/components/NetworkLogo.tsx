import React from 'react';
import clsx from 'clsx';
import {Eth} from '@web3uikit/icons'

export const NetworkLogo = ({
                                             network,
                                             ...props
                                         }: React.ComponentProps<'div'> & { network: number }) => {
    //todo
    return (
        <div
            {...props}
            className={clsx(
                'w-[48px] min-w-[48px] h-[48px] rounded-full text-center grid place-items-center',
                props.className,
            )}
            style={{
                background: '#617DEA'
            }}
        >
            { network === 1 ? <img src="/assets/eth-icon.svg" alt="eth logo" role="img"/>: <span className={'text-2xl font-bold text-slate-100/90'}>?</span>}
        </div>
    );
};