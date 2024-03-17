import React, { ReactNode } from 'react'
import { cn } from '../../../utils/cn'

export interface TriggerProps extends React.ComponentProps<'div'> {
    children: ReactNode
}

export const TooltipTrigger = ({children, className, ...props}: TriggerProps) => {
  return (
    <div className={cn('cursor-pointer inline-block', className)}>
        {children}
    </div>
  )
}
