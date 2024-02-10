import React from 'react'
import { OwnedDomainsGrid } from '../../components/OwnedDomainsGrid'
import { DomainCard, DomainCardProps } from '../../components/DomainCard'
import { DomainTakenOwner, DomainTakenOwnerProps } from './DomainTakenOwner'

export type DomainTakenContentProps = {
  domainCardProps: DomainCardProps
  domainOwnerProps: DomainTakenOwnerProps,
}
export const DomainTakenContent = ({domainCardProps, domainOwnerProps}: DomainTakenContentProps) => { 
  return (
    <section className='relative min-h-screen py-24'>
        <div className=' w-full h-auto flex justify-center items-center gap-36 relative mb-40'>
          <DomainCard {...domainCardProps} />
          <DomainTakenOwner {...domainOwnerProps} />
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
