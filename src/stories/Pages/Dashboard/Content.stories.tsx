import type { Meta, StoryObj } from '@storybook/react';
// import { Dashboard } from '../../../../../../pages/DashBoard/DashBoard';
import { Dashboard } from '../../../components/Templates/DashBoard/DashBoard';

const meta = {
  title: 'Pages/Dashboard',
  component: Dashboard,
  parameters: { 
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/meS5SKN5PdA8HwHT3fuKmp/Namefi-App?type=design&node-id=670-3073&mode=design&t=ySn2Mda92cyJOLTn-4s',
    }
  },
} satisfies Meta<typeof Dashboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Content: Story = { 
  args: {
    domainCreditProps: {
    },
    userName: 'Vitalik.eth',
    
  }
 
}