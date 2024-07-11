import React from 'react';
import { cn } from '../../../../utils/cn';
import LoaderSVG from '../../../../assets/loader.svg';

export interface SpinnerProps {
	className?: string;
}

export const Spinner = ({ className }: SpinnerProps) => (
	<img className={cn('animate-spin duration-500', className)} src={LoaderSVG} />
);
