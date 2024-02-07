import React from 'react'
import './App.css'
import { Home } from './components/homepage1/Home'
import { PageLayout } from './components/PageLayout'

function HomePage1() {

  return (
    <div className='containers bg-[#111] relative pt-8'>
          <PageLayout includeSearchBar={true}>
            <Home />
          </PageLayout>
    </div>
  )
}

export default HomePage1
