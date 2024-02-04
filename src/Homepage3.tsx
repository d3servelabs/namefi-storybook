import './App.css'
import React from 'react'
import { Header } from './components/homepage3/Header'
import { Home } from './components/homepage3/Home'

export const Homepage3 = () => {
  return (
    <div className='containers bg-[#111] relative pt-8'>
        <Header />
        <Home />
    </div>
  )
}
