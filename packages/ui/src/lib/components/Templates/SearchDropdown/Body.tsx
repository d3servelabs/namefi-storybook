import React, { ReactNode } from 'react'
import  { cn }  from "@namefi/utils"

export const Body = ({children}:{children: ReactNode}) => {
  return (
    <div className={cn('relative w-full m-0 p-0')}>
        {children?.[0]}
        {children?.[1]}
    </div>
  )
}
