import clsx from 'clsx';
import React from 'react';
import FormHelperText from './FormHelperText';
import { cn } from '../../../../utils/cn';
import {ReactSingleNode} from "../../../../utils/React";

export interface FormControlRootProps extends React.ComponentProps<'div'> {
	error?: any;
	helperText?: any;
	children: React.ReactElement,
}

const FormControlRoot = ({
	className,
	error,
	children,
	helperText,
	...props
}: FormControlRootProps) => {
	return (
		<div {...props} className={cn('flex flex-col items-start justify-start', className)}>
			{React.cloneElement(children, { error: error })}
			{(helperText || error) && (
				<FormHelperText error={!!error}>{error || helperText}</FormHelperText>
			)}
		</div>
	);
};
export default FormControlRoot;
