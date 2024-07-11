import React from 'react';
import { UpdateIcon } from '@radix-ui/react-icons';

export const ButtonLoadingContent = ({
	className,
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) => {
	return (
		<>
			{children}
			<UpdateIcon className={'animate-spin text-emerald-400 w-5 h-5'}  />
		</>
	);
};
