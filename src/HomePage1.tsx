import React from 'react'
import './App.css'
import { Header } from './components/homepage1/Header'
import { Home } from './components/homepage1/Home'

function HomePage1() {

  return (
    <div className='containers bg-[#111] relative pt-8'>
          <Header />
          <Home />
    </div>
  )
}

export default HomePage1
