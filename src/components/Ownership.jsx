import React from 'react'

export const Ownership = () => {
  return (
    <div className='w-[1200px] m-auto flex flex-col gap-12'>
          <div className='relative w-full flex justify-between items-center  before:absolute before:bottom-[-6px] before:w-full before:h-[1.5px] before:bg-[#444]' >
                <p className='font-bold text-[#d9d9d9]  text-[21px] tracking-[0.05em] '>Your Domains</p>
                <div className='flex font-["Roboto_Mono"] justify-between w-[144px] h-[22px] text-[#c6eedb] text-[1em] font-medium tracking-[0.05em] '>
                    <p>DNS</p>
                    <p className='opacity-20'>.eth</p>
                    <p className='opacity-20'>.btc</p>
                </div>
          </div>
          <div className='m-auto relative w-[1089px] grid grid-cols-3 gap-[36px]'>
          {
              [
              {name: 'namefi2024.com'},
              {name: 'namefi.net'},
              {name: 'namefi.ai'},
              {name: 'namefi2024.com'},
              {name: 'namefi.net'},
              {name: 'namefi.ai'},
            ].map((data, x) => <div key={x} className='relative w-[350px] flex flex-col items-center justify-between p-[15px] h-[200px] bg-black rounded-[20px] drop-shadow-[0_0px_1px_rgba(202,202,202,0.25)]'>
                <div className='h-[33px] w-full flex items-center justify-between'>
                    <div className='w-[117px] h-full flex justify-between '>
                        <button className='border-0 outline-0 w-[33px] '><img src="/assets/transfericon.svg" alt="transfer icon" role='img' /></button>
                        <button className='border-0 outline-0 w-[33px] '><img src="/assets/borrowicon.svg" alt="borrow icon" role='img' /></button>
                        <button className='border-0 outline-0 w-[33px] '><img src="/assets/listicon.svg" alt="list icon" role='img' /></button>
                    </div>
                    <button className='relative block'>
                        <img className='w-[24px]' src="/assets/Plus.svg" alt="Plus image" role='img' />
                    </button>
                </div>
                <h3 className='text-[21px] text-[#fff] font-medium tracking-[0.1em] '>{data.name}</h3>
                <div className='w-[112px] h-[27.3px] flex items-center justify-between self-end '>
                    <img className='w-[28px]' src="/assets/lock.svg" alt="lock image" role='img' />
                    <div className='w-[75px] h-full'>
                        <p className='text-[#acacac] text-[8px] font-bold tracking-[0.1em] '>Expires on</p>
                        <p className='text-[#ededed] text-[11px] font-bold tracking-[0.1em] '>Mar 01 2025</p>
                    </div>
                </div>
            </div>
              )
          }
            
        </div>
      </div>
  )
}
