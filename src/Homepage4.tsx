import React from 'react'
import { Home } from './components/homepage4/Home'
import './App.css'
import { PageLayout } from './components/PageLayout'

export const Homepage4 = () => {
  return (
    <div className='containers bg-[#111] relative pt-8'>
        <PageLayout includeSearchBar={true}>
            <Home />
        </PageLayout>
    </div>
  )
}
