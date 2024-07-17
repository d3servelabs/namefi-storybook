import React from 'react';
import  {cn}  from "@namefi/utils"

function DomainCardRoot({children, className,small, href, ...props}: React.ComponentProps<'a'> & {small?:boolean}) {
    return (
        <a
            {...props}
            href={href}
            className={cn(
                'relative rounded-5 flex flex-col items-center bg-black-1000 justify-between',
                small ? ' w-87.5 p-4 pt-2.5 h-50 drop-shadow-[0_0px_1px_rgba(202,202,202,0.25)]':
                    'p-6 w-100 h-100 drop-shadow-[0_0_15px_rgba(202,202,202,0.25)]',
            )}>
            {children}
        </a>
    );
}
function DomainCardRootSmall({children, ...props}: React.ComponentProps<'a'>) {
    return (
        <DomainCardRoot {...props} small={true}>{children}</DomainCardRoot>
    );
}
DomainCardRoot.Small = DomainCardRootSmall

export default DomainCardRoot