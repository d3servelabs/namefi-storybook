import React, { ReactElement } from 'react'
import { cn } from '../../../utils/cn'

export interface LinkProps extends React.ComponentProps<'a'> {
  children: string
}
export const TooltipLink = ({children, ...props}: LinkProps) => {
  return (
    <a className={cn('underline text-primary-500')} {...props}>{children}</a>
  )
}
