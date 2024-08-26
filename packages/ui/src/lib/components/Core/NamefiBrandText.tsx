import React from 'react';
import { cn } from '../../utils/cn';

export type NamefiBrandTextProps = {
	children: React.ReactNode;
	className?: string;
};

export const NamefiBrandText = ({ children, className }: NamefiBrandTextProps) => {
	return (
		<span
			className={cn(
				'font-["Zilla_Slab_Highlight"] text-2xl font-bold tracking-[0.1em]',
				className,
			)}>
			{children}
		</span>
	);
};

export default NamefiBrandText;
