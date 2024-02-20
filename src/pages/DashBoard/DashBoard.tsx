import React from 'react'
import { DomainCreditCard, DomainCreditCardProps } from './DomainCreditCard'
import { NamefiBrandText } from '@components/NamefiBrandText'
import { LoadindAnimation, LoadindAnimationProps } from './LoadindAnimation'

export type DashBoardProps = {
    domainCreditProps: DomainCreditCardProps
    userName?: string
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
          <DomainCreditCard {...domainCreditProps} userName={userName} />
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
                    <button>On-going</button>
                    <button className='relative '><span className='opacity-20'>Finished</span>
                        <span className='absolute block w-2 h-2 rounded-full bg-warning -top-1 -right-1'></span>
                    </button>
               </div>
            </div>
            <div className='w-full h-[275px] flex flex-col justify-between '>
                <div className='flex justify-between w-full h-[24px] font-["Roboto_Mono"] font-normal text-white '>
                    <p className=' text-[1em] tracking-[0.05em]'>[Register]</p>
                    <p className=' text-[1em] tracking-[0.05em]'>namifi.com</p>
                    <div className='w-[200px] h-full flex items-center justify-between '>
                        <img className='w-[19px]' src="/assets/globe.svg" alt="globe image" role='img' />
                        <p className='text-[#c6eedb] text-sm'>Waiting on registrar</p>
                    </div>
                </div> 
                <div className='flex justify-between w-full h-[24px] font-["Roboto_Mono"] font-normal text-white '>
                    <p className=' text-[1em] tracking-[0.05em]'>[Release]</p>
                    <p className=' text-[1em] tracking-[0.05em]'>namifi.com</p>
                    <div className='w-[200px] h-full flex items-center justify-between '>
                        <img className='w-[19px]' src="/assets/globe.svg" alt="globe image" role='img' />
                        <p className='text-[#c6eedb] text-sm'>Waiting on registrar</p>
                    </div>
                </div>
                <div className='flex justify-between w-full h-[24px] font-["Roboto_Mono"] font-normal text-white '>
                    <p className=' text-[1em] tracking-[0.05em]'>
                        [Burn <NamefiBrandText
                                    text={'NFT'}
                                    color={'white'}
                                    fontSize={'16px'} 
                                />
                         ]
                    </p>
                    <p className=' text-[1em] tracking-[0.05em]'>namifi.com</p>
                    <div className='w-[200px] h-full flex items-center justify-between '>
                        <div className='w-[175px] flex items-center h-full '>
                            <LoadindAnimation isLoading={true} />
                        </div>
                        <button>
                            <img 
                                className='w-4'
                                 src="/assets/link.svg" 
                                 alt="link image" />
                        </button>
                    </div>
                </div>
                <div className='flex justify-between w-full h-[24px] font-["Roboto_Mono"] font-normal text-white '>
                    <p className=' text-[1em] tracking-[0.05em]'>
                        [Mint <NamefiBrandText
                                    text={'NFT'}
                                    color={'white'}
                                    fontSize={'16px'} 
                                />
                         ] 
                    </p>
                    <p className=' text-[1em] tracking-[0.05em]'>abrac...fa.com</p>
                    <div className='w-[200px] h-full flex items-center justify-between '>
                        <div className='w-[175px] flex items-center h-full '>
                            <LoadindAnimation isLoading={true} />
                        </div>
                        <button>
                            <img 
                                className='w-4'
                                src="/assets/link.svg" 
                                alt="link image" />
                        </button>
                    </div>
                </div>
                <div className='flex justify-between w-full h-[24px] font-["Roboto_Mono"] font-normal text-white '>
                    <p className=' text-[1em] tracking-[0.05em]'>[Transfer]</p>
                    <p className=' text-[1em] tracking-[0.05em]'>abrac...fa.com</p>
                    <div className='w-[200px] h-full flex items-center justify-between '>
                        <div className='w-[175px] flex items-center h-full '>
                            <LoadindAnimation isLoading={true} />
                        </div>
                        <button>
                            <img 
                                className='w-4'
                                src="/assets/link.svg" 
                                alt="link image" />
                        </button>
                    </div>
                </div>
                <div className='flex justify-between w-full h-[24px] font-["Roboto_Mono"] font-normal text-white '>
                    <p className=' text-[1em] tracking-[0.05em] w-[110px] '>
                        [List <NamefiBrandText
                                    text={'NFT'}
                                    color={'white'}
                                    fontSize={'16px'} 
                                />
                        ]
                    </p>
                    <p className=' text-[1em] tracking-[0.05em] self-center '>abrac...fa.com</p>
                    <div className='w-[200px] h-full flex items-center justify-between '>
                        <div className='w-[175px] flex items-center h-full '>
                            <LoadindAnimation isLoading={true} />
                        </div>
                        <button>
                            <img 
                                className='w-4'
                                src="/assets/link.svg" 
                                alt="link image" />
                        </button>
                    </div>
                </div>
                <div className='flex justify-between w-full h-[24px] font-["Roboto_Mono"] font-normal text-white '>
                    <p className=' text-[1em] tracking-[0.05em] w-[110px] '>
                        [Buy
                            <NamefiBrandText
                                    text={'NFT'}
                                    color={'white'}
                                    fontSize={'16px'} 
                                />
                        ]
                    </p>
                    <p className=' text-[1em] tracking-[0.05em] self-center '>abrac...fa.com</p>
                    <div className='w-[200px] h-full flex items-center justify-between '>
                        <div className='w-[175px] flex items-center h-full '>
                            <LoadindAnimation isLoading={true} />
                        </div>
                        <button>
                            <img 
                                className='w-4'
                                src="/assets/link.svg" 
                                alt="link image" />
                        </button>
                    </div>
                </div>
            </div>
          </div>
      </div>

    </section>
  )
}
