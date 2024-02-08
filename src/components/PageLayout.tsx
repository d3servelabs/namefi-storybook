import React from 'react'
import { Header } from './Header'

export const PageLayout = ({children, includeSearchBar}) => {
  return (
    <div>
        <Header includeSearchBar={includeSearchBar}  />
        <main>
            {children}
        </main>
    </div>
  )
}
