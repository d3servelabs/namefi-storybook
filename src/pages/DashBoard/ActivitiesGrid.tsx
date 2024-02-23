import { NamefiBrandText } from '@components/NamefiBrandText'
import React from 'react'
import { LoadindAnimation } from './LoadindAnimation'
import { Activities, ActivitiesProps } from './Activities'


export type ActivitiesGridProps = {
    activities?: Partial<ActivitiesProps>[]
    activitiesProps?: ActivitiesProps
}

export const ActivitiesGrid = ({activities, activitiesProps}: ActivitiesGridProps) => {

  return (
    <div className='relative flex flex-col justify-between w-[574px] h-[361px]'>
        <div className='relative h-[29px] w-full flex items-center justify-between
            before:absolute
            before:h-[1.5px]
            before:w-full
            before:bg-[#444]
            before:left-0
            before:-bottom-3'>
            <h3 className='font-bold text-[21px] tracking-[0.05em] text-[#d9d9d9] '>Last Activities</h3>
            <div className='w-[175px] h-full flex gap-[18px] font-medium text-[16px] font-["Roboto_Mono"] tracking-[0.02em] text-[#C6EEDB] '>
                <button >On-going</button>
                <button className='relative '><span className='opacity-20'>Finished</span>
                    <span className='absolute block w-2 h-2 rounded-full bg-warning -top-1 -right-1'></span>
                </button>
            </div>
        </div>
        <div className='w-full h-[275px] flex flex-col justify-between '>
            {
                activities?.map((data, x) => <Activities domainName={data.domainName} todo={data.todo} isLoading={data.isLoading} />)
            }
        </div>
    </div>
  )
}
