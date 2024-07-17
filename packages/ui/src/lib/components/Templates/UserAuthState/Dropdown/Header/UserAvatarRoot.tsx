import React, {ComponentProps} from 'react';
import  {cn}  from "@namefi/utils"

export default function UserAvatarRoot({children, className, ...props}: ComponentProps<'div'>) {
    return (
        <div {...props} className={cn(className, 'w-12 h-12 *:w-full *:h-full')}>
            {children}
        </div>
    );
}