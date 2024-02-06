import type { Meta, StoryObj } from '@storybook/react';

import { Headers } from '../components/Headers';
import '../index.css'
import '../App.css'
const meta = {
  title: 'Components/Headers',
  component: Headers,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Headers>;

export default meta;
type Story = StoryObj<typeof meta>; 

export const LoggedIn: Story = {
  args: { 
    user: {
      name: 'Jane Doe',
    },
  },
};

export const LoggedOut: Story = {};
