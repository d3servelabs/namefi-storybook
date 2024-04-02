import React, {ComponentProps} from 'react'
import { SubscriptionFooter } from './Subscription'
import { NamefiBrandText } from '../../components/Core/NamefiBrandText'

import {SocialLinks} from "./SocialLinks";

export type FooterProps = {
    socialLinks: ComponentProps<typeof SocialLinks>;
    children?: React.ReactNode,

}
export const Footer = ({socialLinks,children}:FooterProps) => {
  return (
    <div className='w-full bg-[#24242480] flex justify-center items-center py-5 rounded-t-[30px] '>
        <div className='w-[960px] xl:w-[1200px] h-[243px] flex flex-col justify-between'>
            <div className='w-full h-[134px] flex flex-col justify-between '>
                <div className='w-full flex justify-between items-center '>
                    <p className='font-bold tracking-widest '>
                        <NamefiBrandText className="text-[32px] text-white">Namefi</NamefiBrandText>
                    </p>
                    {/*<SubscriptionFooter />*/}
                </div>
                <div className='w-[336px] flex justify-between items-center'>
                   <SocialLinks {...socialLinks}/>
                </div>
            </div>
            <nav className='w-full flex justify-between items-center'>
                <p className='font-normal text-base tracking-wide text-[#d6d6d6] '>D3SERVE LABS, Inc. All Rights Reserved.</p>
                <ul className='flex gap-8 xl:gap-12 text-[#d6d6d6] tracking-wide text-lg font-normal '>

                    {children}
                </ul>
            </nav>
        </div>
    </div>
  )
}
