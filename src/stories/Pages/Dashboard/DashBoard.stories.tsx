import type { Meta, StoryObj } from '@storybook/react';
import '../../../index.css'
import '../../../App.css'
import { FullPage as FullPageComponent  } from './Fullpage';

const meta = {
  title: 'Pages/Dashboard',
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

export const FullPage: Story = { 
  args: {
    pageLayoutProps: {
        
        headerProps: {
            includeSearchBar: false,
            headerSearchProps: { 
              placeholderText: 'Search another domain'
            },
            authStateProps: {
                userAddress: '0xfdB5929A4a3e5a98D70c76E86681cFfdfbf47Fe4',
            }
          },
          children: null
    },
    dashBoardProps: {
        domainCreditProps: {
        },
        userName: ''
    }
  }
 
}