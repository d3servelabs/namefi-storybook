import type { Meta, StoryObj } from '@storybook/react';
// import { within, userEvent, expect } from '@storybook/test';

import HomePage1 from '../HomePage1';
import '../index.css'
import '../App.css'

const meta = {
  title: 'Components/HomePage1',
  component: HomePage1,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof HomePage1>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Home: Story = {}