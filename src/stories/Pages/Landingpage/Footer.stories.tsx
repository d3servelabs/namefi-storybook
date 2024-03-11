import type { Meta, StoryObj } from '@storybook/react';
import { Footer as FooterComponent } from '../../../pages/Landingpage/Footer';

const meta = {
  title: 'Pages/Landingpage',
  component: FooterComponent,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof FooterComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Footer: Story = {}