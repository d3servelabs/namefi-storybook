import React, { ReactNode } from 'react'
import { cn } from '../../utils/cn'

export const Root = ({children}:{children: ReactNode}) => {
  return (
    <div className={cn('relative max-w-[500px] bg-black-900 p-5 flex flex-col gap-3 rounded-8 drop-shadow-[0_1px_10px_rgba(255,239,239,0.15)]')}>
        {
            children?.[1] ?
            <>
                {children?.[0]}
                {children?.[1]}
            </>: 
            children
        }
    </div>
  )
}
