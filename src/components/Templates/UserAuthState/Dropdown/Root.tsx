import React from 'react';
import { cn } from '../../../../utils/cn';

export type UserAuthStateDropdownProps = React.ComponentProps<'div'> & {};
const Root = React.forwardRef<HTMLDivElement, UserAuthStateDropdownProps>(
	({ children, ...props }, ref) => {
		return (
			<div
				{...props}
				ref={ref}
				className={cn(
					'relative rounded-[2rem] bg-[#111] drop-shadow-[0_0_20px_rgba(255,239,239,0.15)] py-6 px-6 max-w-[100%] lg:max-w-[515px] min-w-[460px] flex flex-col ',
					props.className,
				)}>
				{children}
			</div>
		);
	},
);
export default Root;
