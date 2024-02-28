import React from 'react'
import {DomainCardDemo, DomainCardProps} from '../../components/Templates/DomainCard/DomainCardDemo'
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
                <DomainCardDemo {...domainCardProps}/>
                <DomainAvailable {...domainAvailableProps} />
            </div>
            {!!ownedDomainsProps && 
                <OwnedDomainsGrid {...ownedDomainsProps}/>
            }
        </section>
    )
}

