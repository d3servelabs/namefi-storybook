import type { Meta, StoryObj } from '@storybook/react';
// import { within, userEvent, expect } from '@storybook/test';

import {Homepage6} from './HomePage6';
import '../../index.css'
import '../../App.css'

const meta:Meta<typeof Homepage6> = {
  title: 'Pages/Homepage6',
  component: Homepage6,
  parameters: {
    layout: 'fullscreen',
  },
  args:{
    pageLayoutProps:{}
  }as any,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Home: Story = {}