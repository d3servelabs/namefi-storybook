import React, {ComponentProps} from 'react';
import {cn} from '../../../../../utils/cn';

export default function ActivitiesHeaderTabs({children, className, ...props}: ComponentProps<'h3'>) {
    return (
        <div
            {...props}
            className={cn(
                'h-full flex gap-4.5 font-medium text-4 font-["Roboto_Mono"] tracking-[0.02em] text-[#C6EEDB]',
                className,
            )}>
            {children}
        </div>
    );
};