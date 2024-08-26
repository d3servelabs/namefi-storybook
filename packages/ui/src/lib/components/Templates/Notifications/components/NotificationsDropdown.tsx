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
				'flex flex-col rounded-8 bg-black-900 px-3 pb-8 pt-6 drop-shadow-[0_0_20px_rgba(255,239,239,0.15)]',
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
				'flex items-center border-b border-border-500 px-4 pb-3 text-lg font-semibold',
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
				'flex justify-end gap-x-4 border-t border-border-500 px-4 pt-6',
				className,
			)}
			{...props}
		/>
	);
};

export const NotificationsDropdown = {
	Root: DropdownRoot,
	Header: DropdownHeader,
	Body: DropdownBody,
	Footer: DropdownFooter,
};
