import React, {ReactNode} from 'react'
import {DomainCard, DomainCardProps} from '../../components/DomainCard'
import {
    DomainAvailableRegisterForm,
    DomainAvailableRegisterFormProps
} from "../../components/DomainAvailableRegisterForm";
import {OwnedDomainsGrid, OwnedDomainsGridProps} from "../../components/OwnedDomainsGrid";

   
export type DomainAvailableContentProps = {
    domainCardProps: DomainCardProps
    registerFormProps: DomainAvailableRegisterFormProps,
    ownedDomainsProps?: OwnedDomainsGridProps,
}
export const DomainAvailableContent = ({domainCardProps, registerFormProps, ownedDomainsProps}: DomainAvailableContentProps) => {
    return (
        <section className='relative min-h-screen py-24'>
            <div className='w-full h-auto flex justify-center items-center gap-36 relative mb-40'>
                <DomainCard {...domainCardProps}/>
                <DomainAvailableRegisterForm {...registerFormProps} />
            </div>
            {!!ownedDomainsProps && 
                <OwnedDomainsGrid {...ownedDomainsProps}/>
            }
        </section>
    )
}

