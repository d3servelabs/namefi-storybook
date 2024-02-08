import React from 'react'
import { OwnedDomainsGrid } from '../../components/OwnedDomainsGrid'
import { DomainTakenCard, DomainTakenCardProps } from '../../components/DomainTakenCard'
import { DomainTakenOwner, DomainTakenOwnerProps } from './DomainTakenOwner'

type DomainTakenContentProps = {
  domainCardProps: DomainTakenCardProps
  domainOwnerProps: DomainTakenOwnerProps,
}
export const DomainTakenContent = ({domainCardProps, domainOwnerProps}: DomainTakenContentProps) => { 
  return (
    <section className='relative min-h-screen py-24'>
        <div className=' w-full h-auto flex justify-center items-center gap-36 relative mb-40'>
          <DomainTakenCard {...domainCardProps} />
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
