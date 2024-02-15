import React from 'react'
import { Button } from '@components/Button'
export const ViewOnButton = () => {
  return (
    <div className='w-full h-[130px] flex flex-col items-start '>
        <p className='font-normal text-sm tracking-[0.05em] text-[#d9d9d9] '>View on</p>
        <div className='w-full h-[98px] flex flex-wrap items-center gap-3'>
            {['Blur.io','X2Y2', 'Looksrare', 'Opensea'].map(msg => <Button backgroundColor='#1C1C1C' borderColor='#79797980'>{msg}</Button> )
            }
        </div>
    </div>
  )
}
