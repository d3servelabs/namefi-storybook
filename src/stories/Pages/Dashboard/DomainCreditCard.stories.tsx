import type { Meta, StoryObj } from '@storybook/react';
import '../../../index.css'
import '../../../App.css'
import { DomainCreditCard } from '@pages/DashBoard/DomainCreditCard';
import moment from "moment";

const meta = {
  title: 'Pages/Dashboard',
  component: DomainCreditCard,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/meS5SKN5PdA8HwHT3fuKmp/Namefi-App?type=design&node-id=670-3073&mode=design&t=ySn2Mda92cyJOLTn-4s',
    }
  },
} satisfies Meta<typeof DomainCreditCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DomainCreditCardStory: Story = { 
  args: {
      balanceProps: {
        balance: 100.234
      },
    userName: 'Vitalik.eth'
  }
 
}