import React, {ComponentProps} from 'react';
import {cn} from "../../../../../utils/cn";

export default function ActivitiesHeaderRoot({children,className,...props} : ComponentProps<'div'>) {
    return (
        <div {...props} className={cn("relative h-10 w-full flex items-center justify-between")}>
            {children}
            <span
                id={'activities-header-bottom-bar'}
                className={'absolute h-0.5 w-full bg-[#444] left-0 bottom-0'}
            />
        </div>
    );
};