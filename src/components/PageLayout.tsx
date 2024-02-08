import React from 'react'
import { Headers } from './Header'

export const PageLayout = ({children, includeSearchBar}) => {
  return (
    <div>
        <Headers includeSearchBar={includeSearchBar}  />
        <main>
            {children}
        </main>
    </div>
  )
}
