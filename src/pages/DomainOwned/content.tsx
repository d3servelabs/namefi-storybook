import React from 'react'
import { OwnedDomainsGrid } from '../../components/OwnedDomainsGrid'
import { DomainOwnedCard, DomainOwnedCardProps } from '@components/DomainOwnedCard'
import { OwnedDomainOwner } from './OwnedDomainOwner'

interface DomainOwnedContentProps {
    domainCardProps: DomainOwnedCardProps
}
export const DomainOwnedContent = ({domainCardProps}: DomainOwnedContentProps) => {
  return (
    <section className='relative min-h-screen py-24'>
        <div className=' w-full h-auto flex justify-center items-center gap-36 relative mb-20'>
          <DomainOwnedCard {...domainCardProps} />
          <OwnedDomainOwner />
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
