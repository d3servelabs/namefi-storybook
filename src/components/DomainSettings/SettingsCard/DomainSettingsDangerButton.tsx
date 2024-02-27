import { SolidButton } from '../../Buttons/SolidButton';
import { cn } from '../../../utils/cn';
import React from "react";

export default function DomainSettingsDangerButton({
	children,
	className,
	...props
}: React.ComponentProps<typeof SolidButton>) {
	return (
		<SolidButton
			{...props}
			className={cn(
				'font-["Roboto_Mono"] !text-3 font-light bg-[#FF3C3C4d] hover:bg-[#FF3C3C4d]/60 text-white',
				className,
			)}>
			{children}
		</SolidButton>
	);
}
