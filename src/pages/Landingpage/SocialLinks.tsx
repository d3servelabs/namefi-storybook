import { DiscordIcon } from '../../components/Core/icons/DiscordIcon'
import { TelegramIcon } from './icons/TelegramIcon'
import { Xicon } from './icons/Xicon'
import React from 'react'

export const SocialLinks = () => {
  return (
    <div className=' h-10 relative flex items-center justify-center gap-1 '>
        <a href="#">
            <Xicon className='w-10' />
        </a>
        <a href="#">
            <DiscordIcon className='w-10' />
        </a>
        <a href="#">
            <TelegramIcon className='' />
        </a>
    </div>
  )
}
