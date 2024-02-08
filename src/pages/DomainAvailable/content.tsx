import React, {ReactNode} from 'react'
import {DomainAvailableCard, DomainAvailableCardProps} from '../../components/DomainAvailableCard'
import {
    DomainAvailableRegisterForm,
    DomainAvailableRegisterFormProps
} from "../DomainAvailable/DomainAvailableRegisterForm";
import {OwnedDomainsGrid, OwnedDomainsGridProps} from "../../components/OwnedDomainsGrid";

   
type DomainAvailableContentProps = {
    domainCardProps: DomainAvailableCardProps
    registerFormProps: DomainAvailableRegisterFormProps,
    ownedDomainsProps?: OwnedDomainsGridProps,
}
export const DomainAvailableContent = ({domainCardProps, registerFormProps, ownedDomainsProps}: DomainAvailableContentProps) => {
    return (
        <section className='relative min-h-screen py-24'>
            <div className='w-full h-auto flex justify-center items-center gap-36 relative mb-40'>
                <DomainAvailableCard {...domainCardProps}/>
                <DomainAvailableRegisterForm {...registerFormProps} />
            </div>
            {!!ownedDomainsProps &&
                <OwnedDomainsGrid {...ownedDomainsProps}/>
            }
        </section>
    )
}

