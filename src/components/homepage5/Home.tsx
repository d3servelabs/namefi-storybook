import React from 'react'
import { Ownership } from '../Ownership'

export const Home = () => {
  return (
    <section className='relative min-h-screen py-24'>
        <div className=' w-full h-auto flex justify-center items-center gap-36 relative mb-20'>
          <div className='relative rounded-[20px] p-6 bg-black flex flex-col justify-between items-center w-[400px] h-[400px] rounded-[20px] drop-shadow-[0_0_15px_rgba(202,202,202,0.25)]'>
              <div className='flex w-full h-[30px] items-center justify-between'>
                  <img className='w-[163px]' src="/assets/namefiapp.svg" alt="namefiapp img" role='img' />
                  <button className='relative block'>
                      <img className='w-[30px]' src="/assets/Gear.svg" alt="Gear image" role='img' />
                  </button>
              </div>
              <h3 className='text-white font-semibold text-[28px] tracking-[0.1em]'>namefi.com</h3>
              <div className='w-full h-[36px] flex justify-between '>
                  <div className='w-[106px] h-full '>
                      <p className='text-[#acacac] text-xs tracking-[0.1em] '>Owned by</p>
                      <p className='text-[#ededed] text-sm tracking-[0.1em] '>0x3923...d9s3</p>
                  </div>
                  <div className='w-[150px] h-full flex items-center justify-between '>
                    <img className='w-[36.75px]' src="/assets/lock.svg" alt="lock image" role='img' />
                      <div className='w-[99px]'>
                        <p className='text-[#acacac] text-[11px] font-bold tracking-[0.1em] '>Expires on</p>
                        <p className='text-[#ededed] text-sm font-bold tracking-[0.1em] '>Mar 01 2025</p>
                      </div>
                  </div>
              </div>
          </div>
          <div className='relative flex flex-col justify-between py-[64px] w-[415px] h-[347px]'>
              <div className='h-[59px] flex flex-col justify-between'>
                  <p className='font-semibold text-white text-[21px] tracking-[0.05em]'>Transfer domain to another wallet. </p>
                  <p className='font-normal text-[#c6eedb] text-sm tracking-[0.05em]'>Unlock your NFT Lock for Transfer.</p>
              </div>
              {/* <div className='w-full flex flex-col justify-between '> */}
                  {/* <div className='relative h-[83px] flex flex-col justify-between'>
                    <p className='font-normal text-sm text-[#d9d9d9] tracking-[0.05em] '>Recipient Wallet</p>
                    <div className='h-[55px] w-full rounded-[10px] px-[10px] bg-[#313131]'>
                        <form className='relative w-full h-full bg-inherit'>
                            <img className='absolute top-[10px]' src="/assets/metamask.svg" alt="metamask img" role='img' />
                            <label className='w-full'>
                                <input className='w-full h-full outline-0 px-[40px] border-0 bg-inherit text-[#797979] font-medium font-["Roboto_Mono"]' type="text" placeholder='Paste wallet address'  />
                            </label>
                            <button type='button' className='absolute right-0 top-[18px]' ><img src="/assets/group.svg" alt="group img" role='img' /></button>
                        </form>
                    </div>
                  </div> */}
                  <div className='w-[360px] h-[96.5px] flex flex-col justify-between items-center '>
                        <img className='w-[234px]' src="/assets/progressbar.svg" alt="progressbar image" role='img' />
                      <div className='w-full h-[48px] flex justify-between'>
                          <button className='border w-[144.2px] rounded-[80px] px-[24px] flex justify-between items-center'><span className='font-normal text-[#fff] text-[18px] '>Unlock</span><img src="/assets/Unlock.svg" alt="Unlock image" role='img' /></button>
                          <button className='border w-[166.2px] rounded-[80px] px-[24px] flex justify-between items-center opacity-30'><span className='font-normal text-[#fff] text-[18px] '>Transfer</span><img src="/assets/transfer.svg" alt="Transfer image" role='img' /></button>
                      </div>
                  </div>
              {/* </div> */}
          </div>
      </div>
      <Ownership />
    </section>
  )
}
