import type { Meta, StoryObj } from '@storybook/react';

import {HomePage10} from './HomePage10';
import '../../index.css'
import '../../App.css'

const meta = {
  title: 'Pages/HomePage10',
  component: HomePage10,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof HomePage10>;

export default meta;
type Story = StoryObj<typeof meta>;

