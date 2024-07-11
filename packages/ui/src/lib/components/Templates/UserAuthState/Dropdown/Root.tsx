import React from 'react';
import { cn } from '../../../../utils/cn';

export type UserAuthStateDropdownProps = React.ComponentProps<'div'>;
const Root = React.forwardRef<HTMLDivElement, UserAuthStateDropdownProps>(function Root(
	{ children, className, ...props },
	ref,
) {
	return (
		<div
			{...props}
			ref={ref}
			className={cn(
				'relative flex min-w-[460px] flex-col rounded-[2rem] bg-[#111] px-6 py-6 drop-shadow-[0_0_20px_rgba(255,239,239,0.15)] lg:max-w-[515px]',
				className,
			)}>
			{children}
		</div>
	);
});
export default Root;
