import React from 'react';
import { cn } from '../../../utils/cn';
import {UserAuthStateDropdownBody} from "@components/UserAuthState/Dropdown/UserAuthStateDropdownBody";
import {UserAuthStateDropdownHeader} from "@components/UserAuthState/Dropdown/UserAuthStateDropdownHeader";
import {UserAuthStateDropdownFooter} from "@components/UserAuthState/Dropdown/UserAuthStateDropdownFooter";

export type UserAuthStateDropdownProps = React.ComponentProps<'div'> & {};
export const UserAuthStateDropDown = Object.assign(React.forwardRef<HTMLDivElement, UserAuthStateDropdownProps>(
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
),
{
	Header:UserAuthStateDropdownHeader,
	Body:UserAuthStateDropdownBody,
	Footer:UserAuthStateDropdownFooter,
}
);

