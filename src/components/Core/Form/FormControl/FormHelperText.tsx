import { cn } from '../../../../utils/cn';
import React from 'react';

export type Props = React.ComponentProps<'span'> & {
	error: boolean;
};
export default function FormHelperText({ className, error, children, ...props }: Props) {
	return <span {...props} className={cn('text-2.5lg leading-[1rem] min-h-[1rem] px-1.5', error && 'text-error', className)}>{children}</span>;
}
