import React from 'react'
import { DomainBalanceCard, DomainCreditCardProps } from './DomainBalanceCard'
import { ActivitiesListRoot, ActivitiesGridProps } from './Activities/List/ActivitiesListRoot'

export type DashBoardProps = {
    domainCreditProps: DomainCreditCardProps
    userName?: string;
    activitiesGridProps?: ActivitiesGridProps
}
export const Dashboard = ({domainCreditProps, userName}: DashBoardProps) => {
  return (
    <section className='cont relative min-h-screen py-24 flex flex-col '>
      <div className='w-full pl-[24px] mb-20 h-[64px] flex items-center gap-[12px]  '>
          <h2 className='font-bold tracking-[0.05em] text-[24px] text-[#d9d9d9] '>GM,</h2>
          <img src="/assets/maskuser.svg" alt="mask image" role='img' />
          <h2 className='font-[900] tracking-[0.05em] text-[32px] text-[#d9d9d9] '>{userName}</h2>
      </div>
        <div className='w-full h-auto flex justify-center items-center gap-20 relative mb-40'>
          <DomainBalanceCard {...domainCreditProps} userName={userName} />
          <ActivitiesList />
      </div>
 
    </section>
  ) 
}
