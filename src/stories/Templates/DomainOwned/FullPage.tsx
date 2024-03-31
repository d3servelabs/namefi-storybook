import React from 'react'
import { DomainOwnedContent, DomainOwnedContentProps } from '../../../pages/DomainOwned/content'
import '../../../App.css'
import { PageLayout, PageLayoutProps } from '../../../components/PageLayout'

interface FullPageProps {
  domainOwnedProps: DomainOwnedContentProps,
  pageLayoutProps: PageLayoutProps
}

export const FullPage = ({domainOwnedProps, pageLayoutProps}: FullPageProps) => {
  return (
    <div className='containers bg-[#111] relative pt-8'>
        <PageLayout {...pageLayoutProps}>
            <DomainOwnedContent {...domainOwnedProps} />
        </PageLayout>
    </div>
  )
}
