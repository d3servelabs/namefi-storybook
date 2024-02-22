import type { Meta, StoryObj } from '@storybook/react';
import { SocialLinks as SocialLinksComponent } from '@pages/Landingpage/SocialLinks';
import '../../../index.css'
import '../../../App.css'

const meta = {
  title: 'Pages/Landingpage',
  component: SocialLinksComponent,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof SocialLinksComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SocialLinks: Story = {}