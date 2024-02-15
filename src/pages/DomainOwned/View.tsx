import { Button } from '@components/Button'
import React from 'react'

export const View = () => {
    return (
        <div className='h-full w-full flex flex-col justify-between '>
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
            <div className='w-full h-[130px] flex flex-col items-start '>
                <p className='font-normal text-sm tracking-[0.05em] text-[#d9d9d9] '>View on</p>
                <div className='w-full h-[98px] flex flex-wrap items-center gap-3'>
                    {['Blur.io','X2Y2', 'Looksrare', 'Opensea'].map(msg => <Button backgroundColor='#1C1C1C' borderColor='#79797980'>{msg}</Button> )
                    }
                </div>
            </div>
        </div>
    )
}
