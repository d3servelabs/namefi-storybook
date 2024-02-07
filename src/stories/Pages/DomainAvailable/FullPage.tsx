import '../../../App.css'
import React from 'react'
import { DomainAvailableContent } from '../../../pages/DomainAvailable/content'
import { PageLayout } from '../../../components/PageLayout'

export const FullPage = () => {
  return (
    <div className='containers bg-[#111] relative pt-10'>
          <PageLayout includeSearchBar={true}>
              <DomainAvailableContent />
          </PageLayout>
    </div>
  )
}
