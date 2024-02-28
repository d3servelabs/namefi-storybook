import React from 'react';
import {cn} from '../../../utils/cn';

export const ButtonText = ({
                               className,
                               children,
                           }: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <span className={cn('font-primary text-lg font-normal text-white ', className)}>
			{children}
		</span>
    );
};