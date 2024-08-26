import { cn } from '../../../../utils/cn';
import React from "react";

export default function DomainSettingsTwoSectionLayout({
	children,
	className,
	...props
}: React.ComponentProps<'div'> & {children: [React.ReactNode, React.ReactNode]}) {
	return (
		<div
			{...props}
			className={cn(
				'w-full h-full  grid grid-cols-[6fr_1px_4fr] p-5 gap-5',
				className,
			)}>
			{children[0]}
			<div className={'h-full bg-[#C6EEDB] rounded-full opacity-50 '}/>
			{children[1]}
		</div>
	);
}
