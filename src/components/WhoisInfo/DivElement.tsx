import React from 'react'

export const DivElement = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='flex'>
        {children}
    </div>
  )
}
