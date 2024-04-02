import React from 'react'
import ethImageSvg from '../../../public/assets/eth-image.svg'
import ethImage1Svg from '../../../public/assets/eth-image1.svg'
import googleCloudSvg from '../../../public/assets/google-cloud.svg'
import awsSvg from '../../../public/assets/aws.svg'

export const PoweredBy = () => {
  return (
    <div className='w-full max-w-[1400px] min-h-[166px] flex flex-col'>
        <p className='font-primary text-lg font-normal text-brand-300 tracking-wide self-start '>Powered by</p>
        <div className='min-h-[142px] flex flex-wrap gap-10 xl:gap-20 items-center justify-center'>
            <img src={ethImageSvg} alt="" />
            <img src={ethImage1Svg} alt="" />
            <img src={googleCloudSvg} alt="" />
            <img src={awsSvg} alt="" />
        </div>
    </div>
  )
}
