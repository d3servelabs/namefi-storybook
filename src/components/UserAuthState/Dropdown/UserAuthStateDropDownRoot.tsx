import React from 'react';
import { cn } from '@utils/cn';

export type UserAuthStateDropdownProps = React.ComponentProps<'div'> & {};
const UserAuthStateDropDownRoot = React.forwardRef<HTMLDivElement, UserAuthStateDropdownProps>(
	({ children, ...props }, ref) => {
		return (
			<div
				{...props}
				ref={ref}
				className={cn(
					'relative rounded-[2rem] bg-[#111] drop-shadow-[0_0_20px_rgba(255,239,239,0.15)] py-12 px-6 ',
					props.className,
				)}>
				<div className="min-w-[460px] flex flex-col gap-5 ">{children}</div>
			</div>
		);
	},
);
export default UserAuthStateDropDownRoot;