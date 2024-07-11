import React from 'react';
import { cn } from '../../../utils/cn';

export interface ViewFinderProps {
	children?: React.ReactNode;
	className?: string;
}

export const ViewFinder = ({ children, className }: ViewFinderProps) => {
	return (
		<div className={cn('overflow-hidden relative', className)}>
			<div className="absolute top-0 right-0 bottom-0 left-0">
				<span className="absolute border-primary-light w-4.5 md:w-9 h-4.5 md:h-9 top-0 left-0 border-t border-l rounded-tl-2"></span>
				<span className="absolute border-primary-light w-4.5 md:w-9 h-4.5 md:h-9 top-0 right-0 border-t border-r rounded-tr-2"></span>
				<span className="absolute border-primary-light w-4.5 md:w-9 h-4.5 md:h-9 bottom-0 left-0 border-b border-l rounded-bl-2"></span>
				<span className="absolute border-primary-light w-4.5 md:w-9 h-4.5 md:h-9 bottom-0 right-0 border-b border-r rounded-br-2"></span>
			</div>
			<div className="relative">{children}</div>
		</div>
	);
};
