import './App.css'
import React from 'react'
import { Home } from './components/homepage2/Home'
import { Header } from './components/homepage2/Header'

export const HomePage2 = () => {
  return (
    <div className='containers bg-[#111] relative pt-10'>
          <Header />
          <Home />
    </div>
  )
}
