import '../../../App.css'
import React from 'react'
import { DomainAvailableContent, DomainAvailableContentProps } from '../../../pages/DomainAvailable/content'
import { PageLayout } from '../../../components/PageLayout'

interface FullPageProps {
  domainAvailableProps: DomainAvailableContentProps
}
export const FullPage = ({domainAvailableProps}: FullPageProps) => {
  return (
    <div className='containers bg-[#111] relative pt-10'>
          <PageLayout includeSearchBar={true}>
              <DomainAvailableContent {...domainAvailableProps} />
          </PageLayout>
    </div>
  )
}
