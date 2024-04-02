import React from 'react'
import alchemySvg from '../../../public/assets/alchemy.svg'
import maskSvg from '../../../public/assets/mask.svg'
import foothillSvg from '../../../public/assets/foothill.svg'
import orangedaoSvg from '../../../public/assets/orangedao.svg'

export const BackedBy = () => {
  return (
    <div className='w-full max-w-[1400px] h-[166px] flex flex-row bg-[#24242480] rounded-5 justify-between items-center p-8'>
        <div className={'self-start'}>
            <p className='font-primary text-lg font-normal text-brand-300 tracking-wide'>Backed by</p>
        </div>
        <div className='max-h-25 h-25 flex gap-12 items-center justify-center'>
            <img className='grayscale hover:grayscale-0' src={alchemySvg} alt="" />
            <img className='grayscale hover:grayscale-0' src={maskSvg} alt="" />
            <img className='grayscale hover:grayscale-0' src={foothillSvg} alt="" />
            <img className='grayscale hover:grayscale-0' src={orangedaoSvg} alt="" />
        </div>
    </div>
  )
}
