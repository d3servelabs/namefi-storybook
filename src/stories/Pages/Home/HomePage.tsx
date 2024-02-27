import React from 'react'
import '../../../App.css'
import { HomePageContent } from '../../../pages/home/content'
import { PageLayout, PageLayoutProps } from '../../../components/PageLayout'

interface HomePageProps {
  pageLayoutProps: PageLayoutProps
}
function HomePage({pageLayoutProps}: HomePageProps) {

  return (
    <div className='containers bg-[#111] relative pt-8'>
          <PageLayout {...pageLayoutProps}>
            <HomePageContent />
          </PageLayout>
    </div>
  )
}

export default HomePage
