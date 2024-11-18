import React from 'react';
import { cn } from '../../../utils/cn';

export interface BrandProps {
	children?: React.ReactNode;
	className?: string;
}

export const Brand = ({ children = 'Namefi', className }: BrandProps) => (
	<span className={cn('font-zilla font-bold tracking-wider text-emerald-400', className)}>
		{children}
	</span>
);
