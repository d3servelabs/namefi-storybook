import { SolidButton } from '../../components/Core/Buttons/SolidButton';
import React from 'react'
import { DashboardBalance, DashboardBalanceProps } from './DashboardBalance';

export type DomainCreditCardProps = {
    userName?: string;
    dashboardBalanceProps?: DashboardBalanceProps
}

export const DomainCreditCard = ({userName, dashboardBalanceProps}: DomainCreditCardProps) => { 
  return (
    <div className='relative rounded-[20px] flex flex-col justify-between items-end w-[493px] h-[361px]'>
              <div className='w-full h-[48px] flex items-center justify-between'>
                  <p className='font-bold text-[21px] text-[#d9d9d9] tracking-[0.05em] '>Your Credit</p>
                    <div>
                        <SolidButton >Claim <img className='w-[21px]' src="/assets/arrow-right2.svg" alt="arrow right" role='img' /></SolidButton>
                    </div>
              </div>
              <div className='flex flex-col w-[459px] h-[289px] p-7 rounded-[20px] border border-[#C6EEDB] items-end justify-between'>
                  <div className='w-full h-[64px] flex justify-between items-center  '>
                      <p className='font-medium text-[24px] tracking-[0.05em] font-["Roboto_Mono"] text-white '>{userName}</p>
                      <img className='w-[64px]' src="/assets/tokenicon.svg" alt="Token Icon" role='img' />
                  </div>
                    <div className='w-full h-[75px] '>
                        <div className='h-full w-[255px] flex justify-between items-start '>
                            <div className='w-[125px] h-full flex flex-col pt-3 '>
                                <DashboardBalance {...dashboardBalanceProps}/>
                            </div>
                            <div className='h-[59.2px] w-[114px] flex items-center gap-[8px]'>
                                <p className='font-["Roboto_Mono"] font-normal text-white text-[25.4px] tracking-[0.05em]'>$NFSC</p>
                                <img src="/assets/notification.svg" alt="notification" role='img' />
                            </div>
                        </div>
                    </div>
                  <div className=' '>
                      <p className='font-["Roboto_Mono"] font-normal text-white text-sm tracking-[0.05em]'>Beta Version</p>
                  </div>
              </div>
          </div>
  )
}
