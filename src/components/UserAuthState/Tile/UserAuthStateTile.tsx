import React from 'react';
import clsx from 'clsx';
import { UserAuthStateTileLabel } from '@components/UserAuthState/Tile/UserAuthStateTileLabel';
import { UserAuthStateTileNetwork } from '@components/UserAuthState/Tile/UserAuthStateTileNetwork';
import { UserAuthStateTileAction } from '@components/UserAuthState/Tile/UserAuthStateTileAction';

export type UserAuthStateTileProps = React.ComponentProps<'button'> & {
	children?: React.ReactNode;
	backgroundColor?: any;
} ;
export const UserAuthStateTile = Object.assign(React.forwardRef<HTMLButtonElement,UserAuthStateTileProps>(function UserAuthStateTile(
    { children, backgroundColor, ...props }: UserAuthStateTileProps,
    ref,
) {
    return (
        <button
            ref={ref}
            type={'button'}
            {...props}
            className={clsx(
                'relative flex items-center justify-between gap-3 rounded-[32px] p-[8px] bg-[#111] h-[60px]',
                props.className,
            )}
            style={{ backgroundColor, ...props.style }}>
            {children}
        </button>
    );
}),{
    Network: UserAuthStateTileNetwork,
    Label: UserAuthStateTileLabel,
    Action: UserAuthStateTileAction,
});