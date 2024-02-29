import type { Meta, StoryObj } from '@storybook/react';
import { WhoisInfo } from '../../../components/Templates/WhoisInfo/WhoisInfo';
const meta = {
  title: 'Pages/WhoisInfo',
  component: WhoisInfo,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof WhoisInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {}