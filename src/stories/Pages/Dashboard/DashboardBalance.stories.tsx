import type { Meta, StoryObj } from '@storybook/react';
import { DashboardBalance } from '../../../components/Templates/DashBoard/DashboardBalance';

const meta = {
  title: 'Pages/Dashboard',
  component: DashboardBalance,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/meS5SKN5PdA8HwHT3fuKmp/Namefi-App?type=design&node-id=670-3073&mode=design&t=ySn2Mda92cyJOLTn-4s',
    }
  },
} satisfies Meta<typeof DashboardBalance>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Balance: Story = { 
  args: {
    balanceProps: {
        balance: 100.233,
        
    }
  }
 
}