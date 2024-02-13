import '../../../App.css'
import React from 'react'
import { DomainAvailableContent, DomainAvailableContentProps } from '../../../pages/DomainAvailable/content'
import { PageLayout, PageLayoutProps } from '../../../components/PageLayout'

interface FullPageProps {
  domainAvailableContentProps: DomainAvailableContentProps,
  pageLayoutProps: PageLayoutProps
}
export const FullPage = ({domainAvailableContentProps, pageLayoutProps}: FullPageProps) => {
  return (
    <div className='containers bg-[#111] relative pt-10'>
          <PageLayout {...pageLayoutProps} >
              <DomainAvailableContent {...domainAvailableContentProps} />
          </PageLayout>
    </div>
  )
}
