import type { Meta, StoryObj } from '@storybook/react';
import {UserBalanceCardRoot} from "../../../components/Templates/Dashboard/BalanceCard/UserBalanceCardRoot";
import ActivitiesListRoot from "../../../components/Templates/Dashboard/Activities/List/ActivitiesListRoot";
import React from "react";
import Dashboard from "../../../components/Templates/Dashboard";

const meta = {
  title: 'Pages/Dashboard',
  component: Dashboard.Activities.Root,
  parameters: { 
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/meS5SKN5PdA8HwHT3fuKmp/Namefi-App?type=design&node-id=670-3073&mode=design&t=ySn2Mda92cyJOLTn-4s',
    }
  },
} satisfies Meta<typeof Dashboard.Activities.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Content: Story = { 
  args: {
    domainCreditProps: {
    },
    username: 'Vitalik.eth',
    
  }as any,
  render({domainCreditProps,username}:any){
    return(
        <section className='cont relative min-h-screen py-24 flex flex-col '>
          <div className='w-full pl-[24px] mb-20 h-[64px] flex items-center gap-[12px]  '>
            <h2 className='font-bold tracking-[0.05em] text-[24px] text-[#d9d9d9] '>GM,</h2>
            <img src="/assets/maskuser.svg" alt="mask image" role='img' />
            <h2 className='font-[900] tracking-[0.05em] text-[32px] text-[#d9d9d9] '>{username}</h2>
          </div>
          <div className='w-full h-auto flex justify-center items-center gap-20 relative mb-40'>
            <UserBalanceCardRoot {...domainCreditProps} username={username} />
            <ActivitiesListRoot />
          </div>

        </section>
    )
  }
 
}