import React from 'react';
import {cn} from '../../../utils/cn';

function DomainCardHeader({children, className,small, ...props}: React.ComponentProps<'div'>& {small?:boolean}) {
    return (
        <div {...props} className={cn('flex w-full h-7.5 items-center justify-between', small && "h-10.75 p-0", className)}>
            {children}
        </div>
    );
}
function DomainCardHeaderSmall({children, className, ...props}: React.ComponentProps<'div'>) {
    return (
        <DomainCardHeader {...props} small={true}>
            {children}
        </DomainCardHeader>
    );
}
DomainCardHeader.Small = DomainCardHeaderSmall

export default DomainCardHeader;