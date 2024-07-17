import React, { ReactNode } from 'react'
import  { cn }  from "@namefi/utils"

export const TooltipInfo = ({children}: {children: ReactNode}) => {
  return (
    <div className={cn(' flex flex-col gap-3')}>
        {children}
    </div>
  )
}
