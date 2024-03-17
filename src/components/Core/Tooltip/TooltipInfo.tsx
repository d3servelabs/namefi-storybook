import React, { ReactNode } from 'react'
import { cn } from '../../../utils/cn'

export const TooltipInfo = ({children}: {children: ReactNode}) => {
  return (
    <div className={cn(' text-white font-normal text-sm tracking-wide leading-5 flex flex-col gap-3')}>
        {children}
    </div>
  )
}
