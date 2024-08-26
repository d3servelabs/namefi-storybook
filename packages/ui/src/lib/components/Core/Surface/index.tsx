import React from 'react';
import { cn } from '../../../utils/cn';

export interface SurfaceProps {
	error?: boolean;
	children?: React.ReactNode;
	className?: string;
}

const Surface = ({ error, children, className }: SurfaceProps) => {
	return (
		<div
			className={cn(
				'w-full h-full rounded-5 overflow-hidden',
				error ? 'bg-error-5' : 'bg-primary-5',
				className,
			)}>
			{children}
		</div>
	);
};

export default Surface;
