import React, { ReactNode } from 'react'
import { cn } from '../../../utils/cn'

export const Root = ({children}: {children: ReactNode}) => {
  return (
    <div>
        {children}
    </div>
  )
}
