import React from 'react'
import { Ownership } from '../Ownership'

export const Home = () => {
  return (
    <section className='cont relative min-h-screen py-24 flex flex-col '>
      <div className='w-full pl-[24px] mb-20 h-[64px] flex items-center gap-[12px]  '>
          <h2 className='font-bold tracking-[0.05em] text-[24px] text-[#d9d9d9] '>GM,</h2>
          <img src="/assets/maskuser.svg" alt="mask image" role='img' />
          <h2 className='font-[900] tracking-[0.05em] text-[32px] text-[#d9d9d9] '>Vitalik.eth</h2>
      </div>
        <div className='w-full h-auto flex justify-center items-center gap-20 relative mb-40'>
          <div className='relative rounded-[20px] flex flex-col justify-between items-end w-[493px] h-[361px]'>
              <div className='w-full h-[48px] flex items-center justify-between'>
                  <p className='font-bold text-[21px] text-[#d9d9d9] tracking-[0.05em] '>Your Credit</p>
                  <button className='flex items-center gap-[12px] px-[24px] py-[12px] rounded-[80px] text-[#232c27] bg-[#48E59B] font-["Roboto_Mono"] font-normal text-lg '><span>Claim</span><img className='w-[21px]' src="/assets/arrow-right2.svg" alt="arrow right" role='img' /></button>
              </div>
              <div className='flex flex-col w-[459px] h-[289px] p-7 rounded-[20px] border border-[#C6EEDB] items-end justify-between'>
                  <div className='w-full h-[64px] flex justify-between items-center  '>
                      <p className='font-medium text-[24px] tracking-[0.05em] font-["Roboto_Mono"] text-white '>Vitalik.eth</p>
                      <img className='w-[64px]' src="/assets/tokenicon.svg" alt="Token Icon" role='img' />
                  </div>
                  <div className='w-full h-[75px] '>
                      <div className='h-full w-[255px] flex justify-between items-start '>
                          <div className='w-[125px] h-full '>
                              <p className='font-["Roboto_Mono"] font-normal text-[#48e59b] text-[38.4px] tracking-[0.02em] '>100<span className='text-[28.8px]'>.00</span></p>
                              <p className='font-["Roboto_Mono"] font-normal text-[#d6d6d6] text-[14.4px] tracking-[0.05em] '> ≈$100.00</p>
                          </div>
                          <div className='h-[59.2px] w-[114px] flex items-center gap-[8px]'>
                              <p className='font-["Roboto_Mono"] font-normal text-white text-[25.4px] tracking-[0.05em]'>$NFSC</p>
                              <img src="/assets/notification.svg" alt="notification" role='img' />
                          </div>
                      </div>
                  </div>
                  <div className=' '>
                      <p className='font-["Roboto_Mono"] font-normal text-white text-sm tracking-[0.05em]'>Beta Version</p>
                  </div>
              </div>
          </div>
          <div className='relative flex flex-col justify-between w-[574px] h-[361px]'>
            <div className='relative h-[29px] w-full flex items-center justify-between
            before:absolute
            before:h-[1.5px]
            before:w-full
            before:bg-[#444]
            before:left-0
            before:-bottom-3'>
               <h3 className='font-bold text-[21px] tracking-[0.05em] text-[#d9d9d9] '>Last Activities</h3>
               <div className='w-[175px] h-full flex gap-[18px] font-medium text-[16px] font-["Roboto_Mono"] tracking-[0.02em] text-[#C6EEDB] '>
                  <button>On-going</button>
                  <button className='opacity-20'>Finished</button>
               </div>
            </div>
            <div className='w-full h-[275px] flex flex-col justify-between '>
                <div className='flex justify-between w-full h-[24px] font-["Roboto_Mono"] font-normal text-white '>
                    <p className=' text-[1em] tracking-[0.05em]'>[Register]</p>
                    <p className=' text-[1em] tracking-[0.05em]'>namifi.com</p>
                    <div className='w-[207px] h-full flex items-center justify-between '>
                        <img className='w-[19px]' src="/assets/globe.svg" alt="globe image" role='img' />
                        <p className='text-[#c6eedb] text-sm'>Waiting on registrar</p>
                    </div>
                </div>
                <div className='flex justify-between w-full h-[24px] font-["Roboto_Mono"] font-normal text-white '>
                    <p className=' text-[1em] tracking-[0.05em]'>[Register]</p>
                    <p className=' text-[1em] tracking-[0.05em]'>namifi.com</p>
                    <div className='w-[207px] h-full flex items-center justify-between '>
                        <img className='w-[19px]' src="/assets/globe.svg" alt="globe image" role='img' />
                        <p className='text-[#c6eedb] text-sm'>Waiting on registrar</p>
                    </div>
                </div>
                <div className='flex justify-between w-full h-[24px] font-["Roboto_Mono"] font-normal text-white '>
                    <p className=' text-[1em] tracking-[0.05em]'>[Burn NFT]</p>
                    <p className=' text-[1em] tracking-[0.05em]'>namifi.com</p>
                    <div className='w-[207px] h-full flex items-center justify-between '>
                        <img className='w-full' src="/assets/frames.svg" alt="frames image" role='img' />
                    </div>
                </div>
                <div className='flex justify-between w-full h-[24px] font-["Roboto_Mono"] font-normal text-white '>
                    <p className=' text-[1em] tracking-[0.05em]'>[Mint NFT]</p>
                    <p className=' text-[1em] tracking-[0.05em]'>abrac...fa.com</p>
                    <div className='w-[207px] h-full flex items-center justify-between '>
                        <img className='w-full' src="/assets/frames.svg" alt="frames image" role='img' />
                    </div>
                </div>
                <div className='flex justify-between w-full h-[24px] font-["Roboto_Mono"] font-normal text-white '>
                    <p className=' text-[1em] tracking-[0.05em]'>[Transfer]</p>
                    <p className=' text-[1em] tracking-[0.05em]'>abrac...fa.com</p>
                    <div className='w-[207px] h-full flex items-center justify-between '>
                        <img className='w-full' src="/assets/frames.svg" alt="frames image" role='img' />
                    </div>
                </div>
                <div className='flex justify-between w-full h-[24px] font-["Roboto_Mono"] font-normal text-white '>
                    <p className=' text-[1em] tracking-[0.05em] w-[110px] '>[List]</p>
                    <p className=' text-[1em] tracking-[0.05em] self-center '>abrac...fa.com</p>
                    <div className='w-[207px] h-full flex items-center justify-between '>
                        <img className='w-full' src="/assets/frames.svg" alt="frames image" role='img' />
                    </div>
                </div>
            </div>
          </div>
      </div>
      <Ownership />
    </section>
  )
}
