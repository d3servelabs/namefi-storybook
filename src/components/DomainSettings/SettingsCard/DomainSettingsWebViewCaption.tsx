import { cn } from '@utils/cn';
import React from "react";

export default function DomainSettingsWebViewCaption({
	children,
	className,
	...props
}: React.ComponentProps<'div'>) {
	return (
		<div
			{...props}
			className={cn(
				"text-green-200 text-[10px] font-normal font-['Roboto'] leading-[14px] tracking-wide mt-2",
				className,
			)}>
			{children}
		</div>
	);
}
