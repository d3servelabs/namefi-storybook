import React from 'react'

export const NavLinks = () => {
  return (
    <ul className='relative xl:w-[660px] py-0 px-12 flex items-center justify-center gap-14 xl:gap-28  h-[53px] '>
        <li className='text-black-200 hover:text-white font-normal text-primary text-base tracking-wider '>
            <a href="#">Features</a>
        </li>
        <li className='text-black-200 hover:text-white font-normal text-primary text-base tracking-wider '>
            <a href="#">NFT & $NFSC</a>
        </li>
        <li className='text-black-200 hover:text-white font-normal text-primary text-base tracking-wider '>
            <a href="#">FAQs</a>
        </li>
    </ul>
  )
}
