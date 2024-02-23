import React from 'react'
import { Header } from './Header'
import { SolidButton } from './SolidButton'
import { Subscription } from './Subscription'
import { PoweredBy } from './PoweredBy'
import { FeaturedCardGrid } from './FeaturedCardGrid'
import { Supporting } from './Supporting'
import { BackedBy } from './BackedBy'

export const FullPage = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center gap-[100px] pt-10'>
        <div className='w-full h-screen flex flex-col justify-between items-center'>
            <Header />
            <div className='w-full flex flex-col justify-between items-center h-[320px]'>
                <h1 className='text-white tracking-wider text-[64px] font-bold font-third '>Trading domains on chain.</h1>
                <div className='relative flex gap-5'>
                    <Subscription />
                    <SolidButton>I'm an Investor</SolidButton>
                </div>
            </div>
        </div>
        <PoweredBy />
        <FeaturedCardGrid />
        <Supporting />
        <BackedBy />
        <div className='w-[1200px] bg-red-400 h-[670px] '>

        </div>

    </div>
  )
}
