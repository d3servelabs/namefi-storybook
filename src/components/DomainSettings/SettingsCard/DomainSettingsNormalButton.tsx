import { SolidButton } from '../../Buttons/SolidButton';
import { cn } from '../../../utils/cn';
import React from "react";

export default function DomainSettingsNormalButton({
	children,
	className,
	...props
}: React.ComponentProps<typeof SolidButton>) {
	return (
		<SolidButton
			{...props}
			className={cn(
				'font-["Roboto_Mono"] !text-3 font-light text-white bg-[#101010] hover:bg-[#101010]/60',
				className,
			)}>
			{children}
		</SolidButton>
	);
}
