import React, {ComponentProps} from 'react';
import {cn} from '../../../../../utils/cn';

export default function UserLabel({children, className, ...props}: ComponentProps<'p'>) {
    return (
        <p {...props} className={cn('font-primary text-white', className)}>
            {children}
        </p>
    );
}