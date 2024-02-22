import React, { useState } from 'react'
import { Header } from './Header'
import { SolidButton } from './SolidButton'
import { Subscription } from './Subscription'
import { PoweredBy } from './PoweredBy'
import { FeaturedCardGrid } from './FeaturedCardGrid'
import { Supporting } from './Supporting'
import { BackedBy } from './BackedBy'
import { Footer } from './Footer'
import { Card1, Card2 } from './DomainCard'
import { CaretLeft } from './icons/CaretLeft'
import { CaretRight } from './icons/CaretRight'
import { NamefiBrandText } from '@components/NamefiBrandText'
import { Message1, Message2 } from './AssetsMessage'
import clsx from 'clsx'
import { ButtonText } from '@components/Buttons/Button'
import { FaqComponent } from './FaqComponent'

export const FullPage = () => {

    const [prev, setPrev] = useState(0)
  return (
    <div className='w-full bg-black-1000 flex flex-col justify-center items-center gap-[100px] pt-10'>
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
        <div className='w-[1200px] h-[720px] flex flex-col justify-between '>
            <h3 className='font-bold tracking-wider font-primary text-primary-500 text-3xl self-start '>Our Assets</h3>
            <div className='w-full h-[568px] flex gap-[100px] justify-center'>
                {Array(1).fill(0).map((_, idx) => <>
                    { prev === idx ?<Card1 /> :
                    <Card2 />}
                 
                <div className='w-[508px] h-[500px] flex justify-start items-start'>
                    <div className='w-full h-[429px] flex flex-col justify-between items-end '>
                        <div className='w-[96px] h-[48px] px-4 flex justify-between items-center '>
                            <button onClick={() => setPrev(0)}><CaretLeft className={clsx( prev == 1 && 'fill-[#48E59B]')} /></button>
                            <button onClick={() => setPrev(1)}><CaretRight className={clsx( prev == 1 && 'fill-[#797979]')} /></button>
                        </div>
                        {
                            prev === idx ?
                            <Message1 /> :
                            <Message2 />
                        }
                    </div>
                </div></>
                )}
                
            </div>
        </div>
        <BackedBy />
        <div className='relative w-[1200px] flex flex-col justify-center items-center gap-[64px] '>
            <h3 className='font-bold text-3xl text-primary-500 tracking-widest self-start '>FAQs</h3>
            <div className='w-[830px] h-auto'>
                <FaqComponent />
            </div>
        </div>
        <Footer />
    </div>
  )
}