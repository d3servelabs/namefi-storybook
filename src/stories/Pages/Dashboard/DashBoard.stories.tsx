import type { Meta, StoryObj } from '@storybook/react';
import '../../../index.css'
import '../../../App.css'
import { Dashboard } from '@pages/DashBoard/DashBoard';
import { FullPage as FullPageComponent } from './Fullpage';
import moment from "moment";

const meta = {
  title: 'Pages/Dashboard/Fullpage',
  component: FullPageComponent,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/meS5SKN5PdA8HwHT3fuKmp/Namefi-App?type=design&node-id=670-3073&mode=design&t=ySn2Mda92cyJOLTn-4s',
    }
  },
} satisfies Meta<typeof FullPageComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Content: Story = { 
  args: {
    pageLayoutProps: {
        
        headerProps: {
            includeSearchBar: false,
            headerSearchProps: {
              placeholderText: 'Search another domain'
            },
            authStateProps: {
                userAddress: '0xfdB5929A4a3e5a98D70c76E86681cFfdfbf47Fe4',
                // balanceProps: { 
                //     balance: 100.23
                // }
            }
          },
          children: null
    },
    dashBoardProps: {
        domainCreditProps: {
            // balanceProps: {
            //     balance: 100.23
            // }
        },
        userName: ''
    }
  }
 
}