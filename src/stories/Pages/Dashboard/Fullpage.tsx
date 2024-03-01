import '../../../App.css'
import React from 'react'
import { PageLayout, PageLayoutProps } from '../../../components/PageLayout'
import { Dashboard, DashBoardProps } from '../../../components/Templates/DashBoard/DashBoard'

interface FullPageProps {
  dashBoardProps: DashBoardProps,
  pageLayoutProps: PageLayoutProps
}
export const FullPage = ({dashBoardProps, pageLayoutProps}: FullPageProps) => {
  return (
    <div className='containers bg-[#111] relative pt-10'>
          <PageLayout {...pageLayoutProps} >
              <Dashboard {...dashBoardProps} />
          </PageLayout>
    </div>
  )
}
