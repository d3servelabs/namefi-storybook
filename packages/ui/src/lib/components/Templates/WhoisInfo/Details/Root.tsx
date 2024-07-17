import React, { ComponentProps } from 'react'
import  { cn }  from "@namefi/utils"


const Root: React.FC<ComponentProps<'div'>> = ({children, className, ...props}) => {
  return (
    <div className={cn('flex pr-4 gap-12 justify-center ', className)} {...props} >
        {children}
    </div>
  )
}

export default Root