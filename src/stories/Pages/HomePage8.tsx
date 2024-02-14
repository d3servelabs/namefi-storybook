import React from 'react'
import { Home } from '../../pages/homepage8/Home'
import '../../App.css'
import { PageLayout, PageLayoutProps } from '../../components/PageLayout'

interface HomePageProps {
  pageLayoutProps: PageLayoutProps
}
export const Homepage8 = ({pageLayoutProps}: HomePageProps) => {
  return (
    <div className='containers bg-[#111] relative pt-8'>
        <PageLayout {...pageLayoutProps}>
          <Home />
        </PageLayout>
    </div>
  )
}
