import React, { useRef, useState } from 'react'
import { BaseButton, SolidButton } from './SolidButton'
import clsx from 'clsx'


export const FaqComponent = () => {

  const [height, setHeight] = useState(true)

  return (
    <div className='relative w-[825px] px-[33px] border-[1.5px] border-brand-200 rounded-2xl hover:border-primary-500 duration-300'>
        <button 
          onClick={() => setHeight(!height)}
          className=' relative w-full flex items-center justify-between h-[80px] text-brand-200 hover:text-white duration-300
            before:absolute
            before:w-full
            before:h-px
            before:bg-border-500
            before:left-0
            before:bottom-0 '> 
            <span className='font-semibold text-[21px] tracking-widest '>How does Namefi work?</span> 
            <img src={height? "/assets/pin.svg": "/assets/pin-fill.svg"} alt="pin icon" />
         </button>
        <div className={clsx(' overflow-hidden flex flex-col gap-5 duration-200', height && 'duration-200 max-h-[0]')}>
            <div className='w-full font-normal mb-14 text-lg text-[#d6d6d6] pt-6 tracking-wider flex flex-col gap-6'>
                <p>Namefi is a web3 platform that lives on multi-chain supporting DNS domains on chain. 
                  With Namefi, you could manage your domains as an NFT asset, which means you can transfer,
                  list for sell, and integrate it with all the DeFi protocols.
                </p>
                <p>
                  Besides, Namefi also aims to provide superb domain management
                  features such as AutoPark™, AutoENS™, DNS Records, Nameservers and URL forwarding.
                </p>

            </div>
            <div className='w-full flex justify-between items-center pb-[33px]'>
                <p className='font-light text-brand-green text-base tracking-widest'>Does it answer your question?</p>
                <div className='flex gap-5'>
                    <SolidButton>Yes</SolidButton>
                    <BaseButton>No, ask a Human</BaseButton>
                </div>
            </div>
        </div>
    </div>
  )
}
