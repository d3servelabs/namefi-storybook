import React from 'react';
import clsx from 'clsx';



export const UserAuthStateNetwork = ({ network, ...props }: React.ComponentProps<'div'> & { network: number }) => {
	//todo
	return (
		<div
			{...props}
			className={clsx('block w-[48px] min-w-[48px] h-[48px] bg-[#7d7d7d] rounded-full ', props.className)}>
			<img src="/assets/eth-icon.svg" alt="eth logo" role="img" />
		</div>
	);
};
export const UserAuthStateLabel = ({ children }) => {
	return <p className="text-white text-base font-medium font-primary">{children}</p>;
};

export const UserAuthStateAction = ({ children }) => {
	return <>{children}</>;
};

export type UserAuthStateTileProps = Partial<{
    children: React.ReactNode;
    backgroundColor?: any;
}> & React.ComponentProps<'button'>;
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
    Network: UserAuthStateNetwork,
    Label: UserAuthStateLabel,
    Action: UserAuthStateAction,
});