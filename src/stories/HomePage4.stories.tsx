import type { Meta, StoryObj } from '@storybook/react';
// import { within, userEvent, expect } from '@storybook/test';

import {Homepage4} from '../Homepage4';
import '../index.css'
import '../App.css'

const meta = {
  title: 'Components/Homepage4',
  component: Homepage4,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Homepage4>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Home: Story = {}