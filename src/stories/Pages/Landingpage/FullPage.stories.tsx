import type { Meta, StoryObj } from '@storybook/react';
import { FullPage as FullPageComponent } from '@pages/Landingpage/FullPage';
import '../../../index.css'
import '../../../App.css'

const meta = {
  title: 'Pages/Landingpage',
  component: FullPageComponent,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof FullPageComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullPage: Story = {}