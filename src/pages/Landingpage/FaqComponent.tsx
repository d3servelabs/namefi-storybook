import React, { useRef, useState } from 'react'
import { BaseButton, SolidButton } from './SolidButton'
import clsx from 'clsx'
import { NamefiBrandText } from '../../components/Core/NamefiBrandText'

type faqProps = {
  question: string;
  answer: string []
}

export type FaqComponentProps = {
    faqContent: Partial<faqProps>[]
}

export const FaqComponent = ({faqContent}: FaqComponentProps) => {

  const [clicked, setClicked] = useState(7)

  const [height, setHeight] = useState(true)
  // How does <NamefiBrandText text='Namefi' color='' fontSize='21px'  /> work?

  return (
  <>    
    {
      faqContent?.map((data, x) => 
          <div 
            key={x}
            className={clsx('relative w-[700px] xl:w-[825px] px-[33px] border-[1.5px] border-brand-200 rounded-2xl hover:border-primary-500 duration-300 mb-5', clicked == x && 'border-primary-500')}>
              <button 
                onClick={() => setClicked(x)}
                className={clsx(` relative w-full flex items-center justify-between h-[80px] text-brand-200 hover:text-white duration-300
                  before:absolute
                  before:w-full
                  before:h-px
                  before:bg-border-500
                  before:left-0
                  before:bottom-0 `, clicked == x && 'text-white')}> 
                  <span className='font-semibold text-[21px] tracking-widest '>{data.question}</span> 
                  <img src={clicked !== x? "/assets/pin.svg": "/assets/pin-fill.svg"} alt="pin icon" />
              </button>
              <div className={clsx(' overflow-hidden flex flex-col gap-5 duration-200 ', clicked !== x && 'duration-200 max-h-[0]')}>
                  <div className='w-full font-normal mb-14 text-lg text-[#d6d6d6] pt-6 tracking-wider flex flex-col gap-6 duration-200'>
                    {data.answer?.map((msg, i) => <p key={i}>
                      {msg}
                    </p> )}
                      
                  </div>
                  <div className='w-full flex justify-between items-center pb-[33px]'>
                      <p className='font-light text-brand-green text-base tracking-widest'>Does it answer your question?</p>
                      <div className='flex gap-5'>
                          <div>
                              <SolidButton>Yes</SolidButton>
                          </div>
                          <BaseButton>No, ask a Human</BaseButton>
                      </div>
                  </div>
              </div>
          </div>
          )
    }
  </>
  )
}

// export const Faq = () => {
  
//   return (

//   )
// }