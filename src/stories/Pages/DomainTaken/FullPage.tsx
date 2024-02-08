import '../../../App.css'
import React from 'react'
import { DomainTakenContent } from '../../../pages/DomainTaken/content'
import { PageLayout } from '../../../components/PageLayout'

export const FullPage = () => {
  return (
    <div className='containers bg-[#111] relative pt-8'>
        <PageLayout includeSearchBar={true}>
            <DomainTakenContent domainCardProps={{
                  domainName: undefined,
                  loading: undefined
              }} />
        </PageLayout>
    </div>
  )
}
