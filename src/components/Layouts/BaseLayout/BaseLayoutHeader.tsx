import React, {ReactNode} from 'react';
import NamefiLogo from "../../../components/icons/NamefiLogo";
import {cn} from "../../../utils/cn";
type AppLayoutHeaderProps = React.ComponentProps<'header'> & {
	content?: ReactNode;
	endSlot?: ReactNode;
};

export default function BaseLayoutHeader({ content, endSlot,className }: AppLayoutHeaderProps) {
	return (
		<header className={cn("namefi-header relative h-20 min-h-20 pl-6 pr-3 rounded-full w-full m-auto mt-9",className)}>
			<nav className="relative w-full h-full m-0 flex justify-between items-center">
				<NamefiLogo className={"w-22.5"}/>
				<div>{content}</div>
				<div>{endSlot}</div>
			</nav>
		</header>
	);
}
