import React from 'react'
import { Ownership } from '../Ownership'

export const Home = () => {
  return (
    <section className='relative min-h-screen py-24'>
        <div className='w-full h-auto flex justify-center items-center gap-36 relative mb-40'>
          <div className='relative rounded-[20px] p-7 bg-black flex flex-col justify-start items-center gap-[130px] w-[400px] h-[400px] rounded-[20px] drop-shadow-[0_0_15px_rgba(202,202,202,0.25)]'>
              <div className='flex w-full h-[30px] items-center justify-between'>
                  <img className='w-[118px]' src="/assets/Available.svg" alt="svg img" />
                  <button className='relative block'>
                      <img className='w-[30px]' src="/assets/Cart.svg" alt="cart image" role='img' />
                      <img className='w-[25px] absolute -top-3 -right-3' src="/assets/Plus.svg" alt="Plus image" role='img' />
                  </button>
              </div>
              <h3 className='text-white font-semibold text-[28px] tracking-[0.1em]'>namefi.com</h3>
          </div>
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
