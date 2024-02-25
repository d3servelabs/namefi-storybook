import React, {ReactNode} from 'react';
import {cn} from '@utils/cn';

export default function OwnedDomainsFilter({
                                       children,
                                       className,
                                       title,
                                       tlds,
                                       onTldClicked,
                                       ...props
                                   }: React.ComponentProps<'div'> & {
    title?: ReactNode;
    tlds?: string[];
    onTldClicked?: (tld: string) => any;
}) {
    return (
        <div {...props} className={cn('relative w-full flex justify-between items-center')}>
            <p className="font-bold text-[#d9d9d9] text-5.25 tracking-[0.05em] ">{title}</p>
            <div
                className='flex font-["Roboto_Mono"] justify-between  h-5.5 text-[#c6eedb] text-[1em] font-medium tracking-[0.05em] gap-1 '>
                {children}
            </div>
            <span className={'absolute bottom-[-6px] w-full h-0.25 bg-[#444]'}/>
        </div>
    );
}