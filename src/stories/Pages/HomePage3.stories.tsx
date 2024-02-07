import type { Meta, StoryObj } from '@storybook/react';
// import { within, userEvent, expect } from '@storybook/test';

import {Homepage3} from './Homepage3';
import '../../index.css'
import '../../App.css'

const meta = {
  title: 'Pages/Homepage3',
  component: Homepage3,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Homepage3>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Home: Story = {}