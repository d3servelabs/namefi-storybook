import type { Meta, StoryObj } from '@storybook/react';
// import { within, userEvent, expect } from '@storybook/test';

import {Homepage8} from './HomePage8';
import '../../index.css'
import '../../App.css'

const meta = {
  title: 'Pages/Homepage8',
  component: Homepage8,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Homepage8>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const Home: Story = {}
