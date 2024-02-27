import React from 'react';
import {cn} from '../../utils/cn';

export default function OwnedDomainsFilterChip({
                                           selected,
                                           children,
                                           className,
                                           ...props
                                       }: React.ComponentProps<'p'> & { selected?: boolean }) {
    return (
        <p
            {...props}
            className={cn('cursor-pointer hover:opacity-80', selected || 'opacity-20', className)}>
            {children}
        </p>
    );
}