import React, { ComponentProps } from 'react'

export const VerifyText: React.FC<ComponentProps<'div'>> = ({children, ...props}) => {
  return (
    <div className=' w-full' {...props}>
        {children} 
    </div>
  )
}
 