import React from 'react'
import { OwnedDomainsGrid } from '../../components/OwnedDomainsGrid'
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
          <div className='relative flex flex-col items-start w-[434px] h-[347.5px]'>
              <div className='h-[306px] w-full flex flex-col justify-between '>
                  <div className='h-[187px] flex flex-col justify-between'>
                      <div className='w-full h-[107px] pt-[48px] '>
                          <p className='font-semibold text-white text-[21px] tracking-[0.05em]'>You own this domain. </p>
                          <p className='font-normal text-[#C6EEDB] text-sm tracking-[0.05em]'>You can manage, transfer, list for sale, or borrow against it.</p>
                      </div>
                      <div className='w-[156px] h-[44px] flex justify-between '>
                          <button className='border-0 outline-0 '><img src="/assets/transfericon.svg" alt="transfer icon" role='img' /></button>
                          <button className='border-0 outline-0 '><img src="/assets/borrowicon.svg" alt="borrow icon" role='img' /></button>
                          <button className='border-0 outline-0 '><img src="/assets/listicon.svg" alt="list icon" role='img' /></button>
                      </div>
                  </div>
                  <div className='w-full h-[71px] flex flex-col items-start justify-between '>
                      <p className='font-normal text-sm tracking-[0.05em] text-[#d9d9d9] '>View on</p>
                      <div className='w-full h-[43px] flex items-center gap-[12px]'>
                          <button className='px-[25px] h-[43px] rounded-[25px] border-[#797979] border-[1.5px] outline-none flex items-center font-["Roboto_Mono"] font-normal text-lg text-[#ffffffcc]'>Blur.io</button>
                          <button className='px-[25px] h-[43px] rounded-[25px] border-[#797979] border-[1.5px] outline-none flex items-center font-["Roboto_Mono"] font-normal text-lg text-[#ffffffcc]'>Blur.io</button>
                          <button className='px-[25px] h-[43px] rounded-[25px] border-[#797979] border-[1.5px] outline-none flex items-center font-["Roboto_Mono"] font-normal text-lg text-[#ffffffcc]'>X2Y2</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
        <OwnedDomainsGrid tlds={['.eth', '.btc']}
                          domains={[
                              {domainName: 'namefi2024.com'},
                              {domainName: 'namefi.net'},
                              {domainName: 'namefi.ai'},
                              {domainName: 'namefi2024.com'},
                              {domainName: 'namefi.net'},
                              {domainName: 'namefi.ai'},
                          ]}/>
    </section>
  )
}
