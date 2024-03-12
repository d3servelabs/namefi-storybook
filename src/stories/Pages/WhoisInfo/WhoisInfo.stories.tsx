import type { Meta, StoryObj } from '@storybook/react';
import { WhoisInfoDemo } from '../../../components/Templates/WhoisInfo/WhoisInfoDemo';
const meta = {
  title: 'Pages/WhoisInfo',
  component: WhoisInfoDemo,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof WhoisInfoDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {}