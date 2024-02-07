import './App.css'
import React from 'react'
import { Home } from './components/homepage3/Home'
import { PageLayout } from './components/PageLayout'

export const Homepage3 = () => {
  return (
    <div className='containers bg-[#111] relative pt-8'>
        <PageLayout includeSearchBar={true}>
            <Home />
        </PageLayout>
    </div>
  )
}
