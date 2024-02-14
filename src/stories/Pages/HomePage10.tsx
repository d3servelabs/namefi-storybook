import React from 'react'
import { Home } from '../../pages/homepage10/Home'
import '../../App.css'
import { PageLayout, PageLayoutProps } from '../../components/PageLayout'
interface HomePageProps {
  pageLayoutProps: PageLayoutProps
}
export const HomePage10 = ({pageLayoutProps}: HomePageProps) => {
  return (
    <div className='containers bg-[#111] relative pt-10'>
        <PageLayout {...pageLayoutProps}>
            <Home />
        </PageLayout>
    </div>
  )
}
