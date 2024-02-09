import '../../../App.css'
import React from 'react'
import { DomainAvailableContent, DomainAvailableContentProps } from '../../../pages/DomainAvailable/content'
import { PageLayout, PageLayoutProps } from '../../../components/PageLayout'

interface FullPageProps {
  domainAvailableProps: DomainAvailableContentProps,
  pageLayoutProps: PageLayoutProps
}
export const FullPage = ({domainAvailableProps, pageLayoutProps}: FullPageProps) => {
  return (
    <div className='containers bg-[#111] relative pt-10'>
          <PageLayout {...pageLayoutProps} >
              <DomainAvailableContent {...domainAvailableProps} />
          </PageLayout>
    </div>
  )
}
