import React from 'react';
import {cn} from "../../../../utils/cn";

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
				className={cn(
					'relative flex items-center justify-between gap-3 rounded-8 p-2 bg-[#111] h-15',
					props.className,
				)}
				style={{ backgroundColor, ...props.style }}>
				{children}
			</button>
		);
	},
);


export default UserAuthStateTileRoot;