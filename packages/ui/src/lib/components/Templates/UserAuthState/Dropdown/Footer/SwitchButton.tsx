import React, { ComponentProps } from 'react';
import {DoubleArrowRightIcon, ExitIcon} from '@radix-ui/react-icons';
import { GhostButton, SolidButton } from '../../../../Core';
import { cn } from '../../../../../utils/cn';

function SwitchButton(
	{ className, children, ...props }: ComponentProps<typeof GhostButton>,
	ref: React.ForwardedRef<HTMLButtonElement>,
) {
	return (
		<GhostButton
			ref={ref}
			{...props}
			className={cn(
				"relative w-auto font-normal text-sm font-primary text-brand-300 flex justify-center gap-2 items-center min-w-[173px] p-2.5",
				className,
			)}>
			<DoubleArrowRightIcon className={'text-primary'} width={24} height={24} />
			<span>{children}</span>
		</GhostButton>
	);
}

export default React.forwardRef(SwitchButton);
