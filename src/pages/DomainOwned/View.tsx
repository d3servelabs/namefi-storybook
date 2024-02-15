import { Button } from '@components/Button'
import React from 'react'
import { ViewOnButton } from './ViewOnButton'

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
            <ViewOnButton />
        </div>
    )
}
