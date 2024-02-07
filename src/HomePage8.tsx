import React from 'react'
import { Header } from './components/homepage8/Header'
import { Home } from './components/homepage8/Home'
import './App.css'
import { PageLayout } from './components/PageLayout'

export const Homepage8 = () => {
  return (
    <div className='containers bg-[#111] relative pt-8'>
        <PageLayout>
          <Home />
        </PageLayout>
    </div>
  )
}
