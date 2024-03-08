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
                'w-full h-full rounded-5 bg-primary-5 overflow-hidden',
                className,
            )}>
            {children}
        </div>
    );
};

export default Surface