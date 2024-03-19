import React from 'react';
import { cn } from '../../../../utils/cn';

export type DropdownRootProps = React.HTMLAttributes<HTMLDivElement>;
export type DropdownHeaderProps = React.HTMLAttributes<HTMLDivElement>;
export type DropdownBodyProps = React.HTMLAttributes<HTMLDivElement>;
export type DropdownFooterProps = React.HTMLAttributes<HTMLDivElement>;

const DropdownRoot = ({ className, ...props }: DropdownRootProps) => {
	return (
		<div
			className={cn(
				'bg-black-900 drop-shadow-[0_0_20px_rgba(255,239,239,0.15)] rounded-8 pt-6 pb-8 px-3 flex flex-col',
				className,
			)}
			{...props}
		/>
	);
};

const DropdownHeader = ({ className, ...props }: DropdownHeaderProps) => {
	return (
		<div
			className={cn(
				'text-lg font-semibold flex items-center px-4 pb-3 border-b border-border-500',
				className,
			)}
			{...props}
		/>
	);
};

const DropdownBody = (props: DropdownFooterProps) => {
	return <div {...props} />;
};

const DropdownFooter = ({ className, ...props }: DropdownFooterProps) => {
	return (
		<div
			className={cn(
				'border-t border-border-500 flex justify-end pt-6 px-4 gap-x-4',
				className,
			)}
			{...props}
		/>
	);
};

export const Dropdown = {
	Root: DropdownRoot,
	Header: DropdownHeader,
	Body: DropdownBody,
	Footer: DropdownFooter,
};
