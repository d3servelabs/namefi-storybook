import type { Meta, StoryObj } from '@storybook/react';

import { Wallet } from '../components/Wallet';

const meta = {
  title: 'Components/Wallet',
  component: Wallet,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof Wallet>;

export default meta;
type Story = StoryObj<typeof meta>; 

export const WalletConnected: Story = {
  args: { 
    user: {
      name: 'Abdul',
    },
  },
};

export const WalletNotConnected: Story = {};
