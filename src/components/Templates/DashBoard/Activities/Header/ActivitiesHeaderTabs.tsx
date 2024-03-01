import React, {ComponentProps} from 'react';
import {cn} from '../../../../../utils/cn';

export default function ActivitiesHeaderTabs({children, className, ...props}: ComponentProps<'h3'>) {
    return (
        <div
            {...props}
            className={cn(
                'w-[175px] h-full flex gap-[18px] font-medium text-[16px] font-["Roboto_Mono"] tracking-[0.02em] text-[#C6EEDB]',
                className,
            )}>
            {children}
        </div>
    );
};