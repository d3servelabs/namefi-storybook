import React from 'react'
import { DomainOwnedContent, DomainOwnedContentProps } from '../../../pages/DomainOwned/content'
import '../../../App.css'
import { PageLayout } from '../../../components/PageLayout'

interface FullPageProps {
  domainOwnedProps: DomainOwnedContentProps
}

export const FullPage = ({domainOwnedProps}: FullPageProps) => {
  return (
    <div className='containers bg-[#111] relative pt-8'>
        <PageLayout includeSearchBar={true}>
            <DomainOwnedContent {...domainOwnedProps} />
        </PageLayout>
    </div>
  )
}
