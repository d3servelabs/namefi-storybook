import React, { ComponentProps } from 'react'

const VerifyTextRoot: React.FC<ComponentProps<'div'>> = ({children, ...props}) => {
  return (
    <div className=' w-full' {...props}>
        {children} 
    </div>
  )
}

export default VerifyTextRoot;