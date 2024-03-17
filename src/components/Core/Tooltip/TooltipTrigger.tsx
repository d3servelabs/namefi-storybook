import React, { ReactNode } from 'react'
import { cn } from '../../../utils/cn'
import { useToolTipContext } from './TooltipContext'

export interface TriggerProps extends React.ComponentProps<'div'> {
    children: ReactNode
}

export const TooltipTrigger = ({children, className, ...props}: TriggerProps) => {

    const {onHover} = useToolTipContext()
  return (
    <div
        onClick={onHover}
        className={cn('cursor-pointer inline-block', className)}>
        {children}
    </div>
  )
}
