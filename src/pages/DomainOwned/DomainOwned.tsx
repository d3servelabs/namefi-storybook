import React from 'react'
import { View } from './View'
import { Transfer } from './Transfer'

export type DomainCardProps = {
  status: 'VIEW' | 'TRANSFER' | 'WALLET' | 'TRANSFERRING' | 'DONE'
}
export const DomainOwned = (props: DomainCardProps) => {
  return (
    <div className='relative flex flex-col justify-center items-center w-[434px] h-[361.5px]'>
        <View />
        {/* <Transfer /> */}
    </div>
  )
}
