import React, { ComponentProps } from 'react'



export const RightFrame: React.FC<ComponentProps<'div'>> = ({ children, ...props}) => {
  return (
    <div className=' w-48 h-full flex flex-col pt-9 gap-9' {...props}>
        {children}
    </div>
  )
}

