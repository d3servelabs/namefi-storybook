import React from 'react'
import { DomainCardDemo, DomainCardProps } from '../../components/Templates/DomainCard/DomainCardDemo'
import { DomainTakenMessage, DomainTakenMessageProps } from './DomainTakenMessage'

export type DomainTakenContentProps = {
  domainCardProps: DomainCardProps
  domainMessageProps: DomainTakenMessageProps,
}
export const DomainTakenContent = ({domainCardProps, domainMessageProps}: DomainTakenContentProps) => {
  return (
    <section className='relative min-h-screen py-24'>
        <div className=' w-full h-auto flex justify-center items-center gap-36 relative mb-40'>
          <DomainCardDemo {...domainCardProps} />
          <DomainTakenMessage {...domainMessageProps} />
      </div>
    </section>
  )
} 
