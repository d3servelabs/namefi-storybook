import React from 'react';
import { cn } from '../../utils/cn';


export type ChipProps = React.ComponentProps<'div'> &
    Partial<{
        selected?: boolean;
        onSelect?: () => void;
    }>;

export function Chip({ selected,
    onSelect,
    children,
    className,
    ...props
}: ChipProps) {
    let chipStyling = selected ? 'py-2.5 md:py-2.5 px-6.25 md:px-6.25 flex justify-center items-center border-primary-500 border border-2 rounded-3xl font-primary text-2.5 md:text-lg cursor-pointer bg-black-900 text-white' : 'transition py-2.5 md:py-2.5 px-6.25 md:px-6.25 flex justify-center items-center border-[#4a4a4a] border bg-[#1c1c1c] rounded-3xl font-primary text-2.5 md:text-lg text-[#d2d2d2] cursor-pointer hover:ring-primary-500 hover:ring-2 hover:ring-inset hover:bg-black-900 hover:text-white';
    return (
        <div
            className={cn(chipStyling, className)} onClick={onSelect} {...props}>
            {children}
        </div>
    );
};
