import React, { ComponentProps } from 'react';
import { ExitIcon } from '@radix-ui/react-icons';
import { SolidButton } from '../../../../Core';
import { cn } from '../../../../../utils/cn';

function ExitButton(
	{ className, children, ...props }: ComponentProps<typeof SolidButton>,
	ref: React.ForwardedRef<HTMLButtonElement>,
) {
	return (
		<SolidButton
			ref={ref}
			{...props}
			className={cn(
				'relative w-auto font-normal text-sm font-primary text-brand-300 bg-brand-100 gap-2 flex justify-center items-center min-w-[173px] p-2.5',
				className,
			)}>
			<ExitIcon className={'text-primary'} width={24} height={24} />
			<span>{children}</span>
		</SolidButton>
	);
}

export default React.forwardRef(ExitButton);
