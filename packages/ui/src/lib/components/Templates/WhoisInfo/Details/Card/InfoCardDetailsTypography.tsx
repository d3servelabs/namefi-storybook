import React, { ComponentProps } from 'react';
import { cn } from '../../../../../utils/cn';

const Name: React.FC<ComponentProps<'h2'>> = ({ className, children, ...props }) => {
	return (
		<h2
			className={cn('font-medium text-xl tracking-wider text-[#797979]', className)}
			{...props}>
			{children}
		</h2>
	);
};

const Email: React.FC<ComponentProps<'p'>> = ({ className, children, ...props }) => {
	return (
		<p
			className={cn(
				'font-normal text-base tracking-wider text-[#797979] flex items-center gap-2.5',
				className,
			)}
			{...props}>
			{children}
		</p>
	);
};
const BodyText: React.FC<ComponentProps<'p'>> = ({ className, children, ...props }) => {
	return (
		<p
			className={cn('font-normal text-[#797979] text-sm tracking-wider', className)}
			{...props}>
			{children}
		</p>
	);
};


const Typography = {
	Name, Email,BodyText
}
export  default Typography