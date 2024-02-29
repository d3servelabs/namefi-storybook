import React from 'react';
import clsx from 'clsx';

export type UserAuthStateTileRootProps = React.ComponentProps<'button'> & {
	children?: React.ReactNode;
	backgroundColor?: any;
};

const UserAuthStateTileRoot = React.forwardRef<HTMLButtonElement, UserAuthStateTileRootProps>(
	function UserAuthStateTileRoot(
		{ children, backgroundColor, ...props }: UserAuthStateTileRootProps,
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
	},
);


export default UserAuthStateTileRoot;