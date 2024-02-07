import React from 'react'
import { Home } from '../../pages/homepage8/Home'
import '../../App.css'
import { PageLayout } from '../../components/PageLayout'

export const Homepage8 = () => {
  return (
    <div className='containers bg-[#111] relative pt-8'>
        <PageLayout includeSearchBar={false}>
          <Home />
        </PageLayout>
    </div>
  )
}
