import React from 'react'
import { OwnedDomainsGrid } from '../../components/OwnedDomainsGrid'
import { DomainCard, DomainCardProps } from '../../components/DomainCard'
import { DomainTakenMessage, DomainTakenMessageProps } from '../../components/DomainTakenMessage'

export type DomainTakenContentProps = {
  domainCardProps: DomainCardProps
  domainMessageProps: DomainTakenMessageProps,
}
export const DomainTakenContent = ({domainCardProps, domainMessageProps}: DomainTakenContentProps) => { 
  return (
    <section className='relative min-h-screen py-24'>
        <div className=' w-full h-auto flex justify-center items-center gap-36 relative mb-40'>
          <DomainCard {...domainCardProps} />
          <DomainTakenMessage {...domainMessageProps} />
      </div>
        <OwnedDomainsGrid tlds={['.eth', '.btc']}
                          domains={[
                              {domainName: 'namefi2024.com'},
                              {domainName: 'namefi.net'},
                              {domainName: 'namefi.ai'},
                              {domainName: 'namefi2024.com'},
                              {domainName: 'namefi.net'},
                              {domainName: 'namefi.ai'},
                          ]}/>
    </section>
  )
}
