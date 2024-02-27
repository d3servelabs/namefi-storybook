import React from 'react'
import { SubscriptionFooter } from './Subscription'
import { NamefiBrandText } from '../../components/NamefiBrandText'
import { Xicon } from './icons/Xicon'
import { DiscordIcon } from './icons/DiscordIcon'
import { TelegramIcon } from './icons/TelegramIcon'

export const Footer = () => {
  return (
    <div className='w-full bg-[#24242480] flex justify-center items-center py-5 rounded-t-[30px] '>
        <div className='w-[960px] xl:w-[1200px] h-[243px] flex flex-col justify-between'>
            <div className='w-full h-[134px] flex flex-col justify-between '>
                <div className='w-full flex justify-between items-center '>
                    <p className='font-bold tracking-widest '>
                        <NamefiBrandText className="text-[32px] text-white">Namefi</NamefiBrandText>
                    </p>
                    <SubscriptionFooter />
                </div>
                <div className='w-[336px] flex justify-between items-center'>
                    <a href="#">
                        <Xicon className='w-10' />
                    </a>
                    <a href="#">
                        <DiscordIcon className='w-10' />
                    </a>
                    <a href="#">
                        <TelegramIcon className='' />
                    </a>
                    <a href="#">
                    <img src="/assets/instagram.svg" alt="" />
                    </a>
                    <a href="#">
                    <img src="/assets/github1.svg" alt="" />
                    </a>
                </div>
            </div>
            <nav className='w-full flex justify-between items-center'>
                <p className='font-normal text-base tracking-wide text-[#d6d6d6] '>D3SERVE LABS, Inc. All Rights Reserved.</p>
                <ul className='flex gap-8 xl:gap-12 text-[#d6d6d6] tracking-wide text-lg font-normal '>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Career</a></li>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">Terms and conditions</a></li>
                </ul>
            </nav>
        </div>
    </div>
  )
}
