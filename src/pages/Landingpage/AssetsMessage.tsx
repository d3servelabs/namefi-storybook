import { NamefiBrandText } from '@components/NamefiBrandText'
import {CaretLeft} from './icons/CaretLeft'
import React from 'react'
import { DefiIcon } from './icons/DEfiIcon'
import { CaretRight } from './icons/CaretRight'

export const Message1 = () => {
  return (
    <div className='w-[508px] h-[500px] flex justify-start items-start'>
        <div className='w-full h-[429px] flex flex-col justify-between items-end '>
            <div className='w-[96px] h-[48px] bg-white px-4 flex justify-between items-center '>
                <CaretLeft className={''} />
                <CaretRight className='' />
            </div>
            <div className='w-full h-[309px] flex flex-col items-start justify-end gap-12'>
                <p className='font-bold  tracking-wider '>
                    <NamefiBrandText text={'Namefi'} color={'#48E59B'} fontSize={'32px'}  /> 
                     <span className='font-semibold text-[32px] text-primary-500 ml-1'>NFT</span>
                </p>
                <p className='font-xl tracking-wider text-[21px] text-brand-300 '>Namefi NFT is a crypto asset issued to represent your DNS ownership on the blockchain.</p>

                <p className='font-xl tracking-wider text-[21px] text-brand-300 '>Your NFT is  <span className='text-brand-blue'>minted when you import</span> and <span className='text-brand-blue'>burned when you export</span> your DNS domain with us.</p>
            </div>
        </div>
    </div>
  )
}
export const Message2 = () => {
    return (
      <div className='w-[508px] h-[500px] flex justify-start items-start'>
          <div className='w-full h-[429px] flex flex-col justify-between items-end '>
              <div className='w-[96px] h-[48px] bg-white px-4 flex justify-between items-center '>
                  <CaretLeft className={''} />
                  <CaretRight className='' />
              </div>
              <div className='w-full h-[309px] flex flex-col items-start justify-end gap-12'>
                  <p className='font-bold  tracking-wider '>
                       <span className='font-semibold text-[32px] text-primary-500'>$NFSC</span>
                  </p>
                  <p className='font-xl tracking-wider text-[21px] text-brand-300 '>$NFSC is a <span className='text-brand-blue'>service credit issued by <NamefiBrandText text='Namefi' color='' fontSize='21px' /> </span> for you to purchase DNS domains. You can burn $USDC or $ETH to mint $NFSC.</p>
  
                  <p className='font-xl tracking-wider text-[21px] text-brand-300 '>$NFSC is currently <span className='text-brand-blue'>non-tradable</span> and <span className='text-brand-blue'>non-transferrable.</span> </p>
              </div>
          </div>
      </div>
    )
  }
