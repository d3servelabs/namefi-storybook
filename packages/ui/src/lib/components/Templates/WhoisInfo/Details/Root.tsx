import React, { ComponentProps } from 'react'
import { cn } from '../../../../utils/cn'


const Root: React.FC<ComponentProps<'div'>> = ({children, className, ...props}) => {
  return (
    <div className={cn('flex pr-4 gap-12 justify-center ', className)} {...props} >
        {children}
    </div>
  )
}

export default Root