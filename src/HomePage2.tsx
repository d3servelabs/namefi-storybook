import './App.css'
import React from 'react'
import { Home } from './components/homepage2/Home'
import { PageLayout } from './components/PageLayout'

export const HomePage2 = () => {
  return (
    <div className='containers bg-[#111] relative pt-10'>
          <PageLayout includeSearchBar={true}>
              <Home />
          </PageLayout>
    </div>
  )
}
