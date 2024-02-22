import type { Meta, StoryObj } from '@storybook/react';
import { Message2 as MessageComponent } from '@pages/Landingpage/AssetsMessage';
import '../../../index.css'
import '../../../App.css'

const meta = {
  title: 'Pages/Landingpage',
  component: MessageComponent,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof MessageComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Message2: Story = {}