import React from 'react'

export type BalanceProps = {

}
export const Balance = () => {
  return (
    <div className='w-full h-[75px] '>
        <div className='h-full w-[255px] flex justify-between items-start '>
            <div className='w-[125px] h-full '>
                {/* <p className='font-["Roboto_Mono"] font-normal text-[#48e59b] text-4xl tracking-[0.02em] '>100<span className='text-[28.8px]'>.00</span></p>
                <p className='font-["Roboto_Mono"] font-normal text-[#d6d6d6] text-sm tracking-[0.05em] '> ≈$100.00</p> */}
            </div>
            <div className='h-[59.2px] w-[114px] flex items-center gap-[8px]'>
                <p className='font-["Roboto_Mono"] font-normal text-white text-[25.4px] tracking-[0.05em]'>$NFSC</p>
                <img src="/assets/notification.svg" alt="notification" role='img' />
            </div>
        </div>
    </div>
  )
}
