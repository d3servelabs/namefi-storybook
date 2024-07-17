import React, {ComponentProps} from 'react';
import  {cn}  from "@namefi/utils"

export default function ConnectionStatus({
                                     loading,
                                     children,
                                     connected,
                                 }: ComponentProps<'div'> & { loading?: boolean; connected?: boolean }) {
    return (
        <div className="relative flex items-center min-w-[90px] gap-1">
			<span
                className={cn(
                    'block w-2 h-2 aspect-square rounded-full',
                    connected ? 'bg-primary-500' : 'bg-warning',
                    loading && 'bg-primary-500 animate-pulse',
                )}
            />
            <p className="font-primary font-normal text-sm text-brand-300">{children}</p>
        </div>
    );
}