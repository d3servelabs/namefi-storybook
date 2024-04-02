import React from 'react'
import openseaSvg from '../../../public/assets/opensea.svg'
import looksrareSvg from '../../../public/assets/looksrare.svg'
import ensSvg from '../../../public/assets/ens.svg'
import nftfiSvg from '../../../public/assets/nftfi.svg'
import tellerSvg from '../../../public/assets/teller.svg'
export const Supporting = () => {
  return (
    <div className='w-full xl:w-[1200px] h-[166px] flex flex-col'>
        <p className='font-primary text-lg font-normal text-brand-300 tracking-wide self-start '>Proudly supporting</p>
        <div className='h-[142px] flex gap-4 xl:gap-10 items-center justify-center'>
            <img className='max-xl:w-30' src={openseaSvg} alt="" />
            <img className='max-xl:w-40' src={looksrareSvg} alt="" />
            <img className='max-xl:w-40' src={ensSvg} alt="" />
            <img className='max-xl:w-30' src={nftfiSvg} alt="" />
            <img className='max-xl:w-40' src={tellerSvg} alt="" />
        </div>
    </div>
  )
}
