import React from 'react'
import { NamefiBrandText } from '@components/NamefiBrandText'

interface cardContentProps {
    label: string;
    text: string[];
    img?: React.ReactNode
}

export type FeaturedCardGridProps = {
    cardContent?: Partial<cardContentProps>[]
}

export const FeaturedCardGrid = ({cardContent}: FeaturedCardGridProps) => {

  return (
    <div className='block relative w-[1230px] h-[736px] rounded-[20px] flex flex-col justify-between py-14 items-center bg-[#24242480] '>
        <div className='w-[368px] h-[58px] font-bold tracking-wider flex justify-between self-start '>
            <NamefiBrandText text={'Namefi'} color='#48e59b' fontSize='48px' />
            <p className=' text-4xl text-primary-500 '>Features</p>

        </div>
        <div className='relative flex gap-5'>
            {
                cardContent?.map(data => <div key={data.label} 
                    className='relative w-[350px] h-[460px] rounded-3xl p-2.5 bg-[#ffffffe6] hover:bg-white'>
                        <div className='w-full h-[379px] gap-12 flex flex-col pt-[64px] pl-[18px] '>
                            <div className='w-[146px] h-[160px] gap-[18px] flex flex-col justify-between '>
                                {data.img}
                                <p className='font-bold text-4xl tracking-wider text-black '>{data.label}</p>
                            </div>
                            <ul className='w-full min-h-[107px] text-[21px] font-medium tracking-wide text-black-600 '>
                                {
                                    data.text?.map((datas, x) => 
                                    <li>
                                        {datas}
                                    </li> )
                                }
                            </ul>
                        </div>
                    </div>)
            }
        </div>
    </div>
  )
}
