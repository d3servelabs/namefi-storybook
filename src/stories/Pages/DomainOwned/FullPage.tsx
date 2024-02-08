import React from 'react'
import { DomainOwnedContent } from '../../../pages/DomainOwned/content'
import '../../../App.css'
import { PageLayout } from '../../../components/PageLayout'

export const FullPage = () => {
  return (
    <div className='containers bg-[#111] relative pt-8'>
        <PageLayout includeSearchBar={true}>
            <DomainOwnedContent />
        </PageLayout>
    </div>
  )
}
