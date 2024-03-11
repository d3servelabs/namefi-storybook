import type { Meta, StoryObj } from '@storybook/react';
import { Header as HeaderComponent } from '../../../pages/Landingpage/Header';
import '../../../index.css'
import '../../../App.css'

const meta = {
  title: 'Pages/Landingpage',
  component: HeaderComponent,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof HeaderComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Header: Story = {}