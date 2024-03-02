import type { Meta, StoryObj } from '@storybook/react';
import '../../../index.css'
import '../../../App.css'
import { DomainBalanceCard } from '../../../components/Templates/DashBoard/DomainBalanceCard';

const meta = {
  title: 'Pages/Dashboard/DomainCreditCard',
  component: DomainBalanceCard,
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/meS5SKN5PdA8HwHT3fuKmp/Namefi-App?type=design&node-id=670-3073&mode=design&t=ySn2Mda92cyJOLTn-4s',
    }
  },
} satisfies Meta<typeof DomainBalanceCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DomainCreditCardStory: Story = { 
  args: {
    userName: 'Vitalik.eth',
    dashboardBalanceProps: {
      balanceProps: {
        balance: 100.23
      }
    }
  }
 
}