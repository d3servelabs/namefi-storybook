import React from 'react'
import { Home } from './components/homepage10/Home'
import './App.css'
import { PageLayout } from './components/PageLayout'

export const HomePage10 = () => {
  return (
    <div className='containers bg-[#111] relative pt-10'>
        <PageLayout includeSearchBar={true}>
            <Home />
        </PageLayout>
    </div>
  )
}
