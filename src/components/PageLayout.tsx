import React from 'react'
import { Headers } from './Headers'

export const PageLayout = ({children}) => {
  return (
    <div>
        <Headers  />
        <main>
            {children}
        </main>
    </div>
  )
}
