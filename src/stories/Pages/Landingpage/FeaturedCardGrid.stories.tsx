import type { Meta, StoryObj } from '@storybook/react';
import { FeaturedCardGrid as FeaturedCardGridComponent } from '@pages/Landingpage/FeaturedCardGrid';
import '../../../index.css'
import '../../../App.css'

const meta = {
  title: 'Pages/Landingpage',
  component: FeaturedCardGridComponent,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof FeaturedCardGridComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FeaturedCardGrid: Story = {}