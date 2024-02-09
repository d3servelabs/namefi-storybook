import React from 'react'
import { OwnedDomainsGrid } from '../../components/OwnedDomainsGrid'
import { DomainCard, DomainCardProps } from '../../components/DomainCard'
import { OwnedDomainOwner } from './OwnedDomainOwner'

export type DomainOwnedContentProps = {
    domainCardProps: DomainCardProps
}
export const DomainOwnedContent = ({domainCardProps}: DomainOwnedContentProps) => {
  return (
    <section className='relative min-h-screen py-24'>
        <div className=' w-full h-auto flex justify-center items-center gap-36 relative mb-20'>
          <DomainCard {...domainCardProps} />
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
