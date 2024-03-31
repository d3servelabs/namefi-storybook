import '../../../App.css'
import React from 'react'
import { DomainTakenContent, DomainTakenContentProps } from '../../../pages/DomainTaken/content'
import { PageLayout, PageLayoutProps } from '../../../components/PageLayout'

interface FullPageProps {
  domainTakenProps: DomainTakenContentProps,
  pageLayoutProps: PageLayoutProps
}
export const FullPage = ({domainTakenProps, pageLayoutProps}: FullPageProps) => {
  return (
    <div className='containers bg-[#111] relative pt-8'>
        <PageLayout {...pageLayoutProps}>
            <DomainTakenContent {...domainTakenProps} />
        </PageLayout>
    </div>
  )
}
