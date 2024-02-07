import React from 'react'
import { OwnedDomainsGrid } from '../../components/OwnedDomainsGrid'
export const Home = () => {
  return (
    <section className='relative min-h-screen py-24'>
        <div className=' w-full h-auto flex justify-center items-center gap-36 relative mb-40'>
          <div className='relative rounded-[20px] p-6 bg-black flex flex-col justify-between items-center w-[400px] h-[400px] rounded-[20px] drop-shadow-[0_0_15px_rgba(202,202,202,0.25)]'>
              <div className='flex w-full h-[30px] items-center justify-between'>
                  <img className='w-[77px]' src="/assets/Taken.svg" alt="Taken img" />
                  <button className='relative block'>
                      <img className='w-[30px]' src="/assets/Bell.svg" alt="Bell image" role='img' />
                      <img className='w-[25px] absolute -top-3 -right-3' src="/assets/Plus.svg" alt="Plus image" role='img' />
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
          <div className='relative flex flex-col justify-between w-[415px] h-[230px]'>
              <div className='h-[118px] w-full flex flex-col justify-between'>
                 <div className='h-[65px]'>
                    <p className='text-[21px] font-semibold tracking-[0.05em] text-[#fff]'>This domain is taken by 0x3923...d9s3. </p>
                    <p className='text-base font-normal tracking-[0.05em] text-[#C6EEDB]'>Connect Wallet to manage if you owns it on Namefi.</p>
                 </div>
                 <button className='w-[248px] flex items-center justify-between'> <span className='text-[16px] font-normal tracking-[0.05em] underline text-[#C6EEDB]'>I own this domain elsewhere</span> <img className='w-[15px]' src="/assets/arrow-right1.svg" alt="arrow-right" role='img' /></button>
              </div>
              <button className='w-[231px] h-[48px] border flex items-center justify-between rounded-[80px] text-white px-[24px] '><span className='font-["Roboto_Mono"] text-lg font-normal '>Connect Wallet</span> <img className='w-[15px]' src="/assets/arrow-right1.svg" alt="arrow-right" role='img' /></button>
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
