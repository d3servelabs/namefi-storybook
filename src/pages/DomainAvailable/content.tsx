import React from 'react'
import {DomainCard, DomainCardProps} from '../../components/DomainCard/DomainCard'
import {OwnedDomainsGrid, OwnedDomainsGridProps} from "../../components/OwnedDomainsGrid";
import { DomainAvailable, DomainAvailableProps } from './DomainAvailable';

   
export type DomainAvailableContentProps = {
    domainCardProps: DomainCardProps
    ownedDomainsProps?: OwnedDomainsGridProps,
    domainAvailableProps: DomainAvailableProps
}
export const DomainAvailableContent = ({domainCardProps, domainAvailableProps, ownedDomainsProps}: DomainAvailableContentProps) => {
    return (
        <section className='relative min-h-screen py-24'>
            <div className='w-full h-auto flex justify-center items-center gap-36 relative mb-40'>
                <DomainCard {...domainCardProps}/>
                <DomainAvailable {...domainAvailableProps} />
            </div>
            {!!ownedDomainsProps && 
                <OwnedDomainsGrid {...ownedDomainsProps}/>
            }
        </section>
    )
}

