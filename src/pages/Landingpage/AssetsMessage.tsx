import { NamefiBrandText } from '../../components/Core/NamefiBrandText'
import React from 'react'

export const Message1 = () => {
  return (

    <div className='w-full h-[260px] xl:h-[309px] flex flex-col items-start justify-end gap-6 xl:gap-12'>
        <p className='font-bold  tracking-wider '>
            <NamefiBrandText className="text-primary-500 text-[32px]">Namefi</NamefiBrandText>
                <span className='font-semibold text-[32px] text-primary-500 ml-1'>NFT</span>
        </p>
        <p className='font-xl tracking-wider text-lg xl:text-[21px] text-brand-300 '>Namefi NFT is a crypto asset issued to represent your DNS ownership on the blockchain.</p>

        <p className='font-xl tracking-wider text-lg xl:text-[21px] text-brand-300 '>Your NFT is  <span className='text-brand-blue'>minted when you import</span> and <span className='text-brand-blue'>burned when you export</span> your DNS domain with us.</p>
    </div>
  ) 
}
export const Message2 = () => {
    return (
        <div className='w-full h-[260px] xl:h-[309px] flex flex-col items-start justify-end gap-6 xl:gap-12'>
            <p className='font-bold  tracking-wider '>
                <span className='font-semibold text-[32px] text-primary-500'>$NFSC</span>
            </p>
            <p className='font-xl tracking-wider text-lg xltext-[21px] text-brand-300 '>$NFSC is a <span className='text-brand-blue'>service credit issued by <NamefiBrandText className="text-[21px]">Namefi</NamefiBrandText> </span> for you to purchase DNS domains. You can burn $USDC or $ETH to mint $NFSC.</p>

            <p className='font-xl tracking-wider text-lg xltext-[21px] text-brand-300 '>$NFSC is currently <span className='text-brand-blue'>non-tradable</span> and <span className='text-brand-blue'>non-transferrable.</span> </p>
        </div>
    )
  }
