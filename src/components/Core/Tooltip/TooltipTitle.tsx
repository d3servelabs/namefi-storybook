import React from 'react'
import { cn } from '../../../utils/cn'

export const TooltipTitle = ({children}:{children: string}) => {
  return (
    <h2 className={cn(' pt-1 font-semibold text-5.25lg text-primary-500 tracking-wider')}>{children}</h2>
  )
}
