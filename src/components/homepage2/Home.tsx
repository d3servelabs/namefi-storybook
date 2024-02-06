import React from 'react'
import { Tile } from '../Tile'
import { Ownership } from '../Ownership'

export const Home = () => {
  return (
    <section className='relative min-h-screen py-24'>
        <div className='w-full h-auto flex justify-center items-center gap-36 relative mb-40'>
          <Tile />
          <div className='relative flex flex-col justify-between w-[359px] h-[359px]'>
            <div className='h-[246px] w-full flex flex-col justify-between'>
                <div className='h-[107px] w-full '>
                  <p className='text-[21px] font-light text-[#999] '>Register for:</p>
                  <div className='h-[74px] flex items-center justify-between '>
                      <button><img className='w-[33px]' src="/assets/minus.svg" alt="decrease image" /></button>
                      <div className='w-[135px] h-[74px] font-normal font-["Roboto_Mono"] text-white flex items-center justify-between'>
                          <p className='text-[56px] leading-none m-0 p-0 self-end'>1 </p>
                          <p className=' text-2xl m-0 p-0  leading-none self-end'>year</p>
                      </div>
                      <button><img className='w-[40px]' src="/assets/Plus.svg" alt="increase image" /></button>
                  </div>
                </div>
                <div className='h-[107px] w-[238px]'>
                    <p className='text-[21px] font-light text-[#999] '>Current Price:</p>
                    <div className='h-[74px] w-full'>
                      <div className='block w-[202px] h-[74px] font-normal font-["Roboto_Mono"] text-white flex justify-between'>
                          <p className='text-[56px] m-0 p-0 self-end leading-none'>20</p>
                          <p className=' text-2xl m-0 p-0 text-end self-end leading-none '>$D3BSC</p>
                          <img className='w-[24px] self-end' src="/assets/notification.svg" alt="notification image" role='img' />
                      </div>
                    </div>
                </div>
            </div>
            <button className='w-[307px] h-[48px] border flex items-center justify-between rounded-[80px] text-white px-[24px] '><span className='font-["Roboto_Mono"] text-lg font-normal '>Connect Wallet to Buy</span> <img className='w-[15px]' src="/assets/arrow-right1.svg" alt="arrow-right" role='img' /></button>
          </div>
      </div>
      <Ownership />
    </section>
  )
}
