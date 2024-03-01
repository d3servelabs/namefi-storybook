import React, { ComponentProps } from 'react'

export const Verify: React.FC<ComponentProps<'div'>> = ({children, ...props}) => {
  return (
    <div className='flex flex-col gap-16' {...props}>
        {children}
    </div>
  )
}
