import type { Meta, StoryObj } from '@storybook/react';
import { InvestorButton as InvestorButtonComponent } from '@pages/Landingpage/InvestorButton';
import '../../../index.css'
import '../../../App.css'

const meta = {
  title: 'Pages/Landingpage',
  component: InvestorButtonComponent,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof InvestorButtonComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InvestorButton: Story = {}