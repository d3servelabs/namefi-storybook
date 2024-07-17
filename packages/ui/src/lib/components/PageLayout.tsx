import React from 'react'
import { Header, HeaderProps } from './Core/Header'
export type PageLayoutProps = {
  headerProps: HeaderProps,
  children
}
 
export const PageLayout = ({children, headerProps}: PageLayoutProps) => {
  return (
    <div>
        <Header {...headerProps}  />
        <main>
            {children}
        </main>
    </div>
  )
}
