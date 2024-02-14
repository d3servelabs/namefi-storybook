import React from 'react'
import { Home } from '../../pages/homepage5/Home'
import '../../App.css'
import { PageLayout, PageLayoutProps } from '../../components/PageLayout'

interface HomePageProps {
  pageLayoutProps: PageLayoutProps
}
export const Homepage5 = ({pageLayoutProps}: HomePageProps) => {
  return (
    <div className='containers bg-[#111] relative pt-8'>
        <PageLayout {...pageLayoutProps} >
            <Home />
        </PageLayout>
    </div>
  )
}
