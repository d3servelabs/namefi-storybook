import type { Meta, StoryObj } from '@storybook/react';
// import { within, userEvent, expect } from '@storybook/test';

import {HomePage2} from '../HomePage2';
import '../index.css'
import '../App.css'

const meta = {
  title: 'Components/HomePage2',
  component: HomePage2,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof HomePage2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Home: Story = {}