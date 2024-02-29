import React from 'react';
import { cn } from '../../../utils/cn';

export interface SurfaceProps {
    children?: React.ReactNode;
    className?: string;
}
const Surface = ({ children, className }: SurfaceProps) => {
    return (
        <div
            className={cn(
                'w-full h-full rounded-5 bg-[#222B27] text-black-500 overflow-hidden flex flex-col',
                className,
            )}>
            {children}
        </div>
    );
};

export default Surface