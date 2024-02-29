import React, { ComponentProps } from 'react'
import { WhoisLinkButton } from './WhoisLinkButton'

export const CardHeader: React.FC<ComponentProps<'div'>> = ({children, ...props}) => {
  return (
    <div className=' w-full h-18 flex justify-between ' {...props}>
        <div className=' flex justify-center items-center p-0 h-full w-18 rounded-full bg-red-400 overflow-hidden'>
            {children}
        </div>
        <WhoisLinkButton />
    </div>
  )
}
