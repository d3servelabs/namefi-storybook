import type { Meta, StoryObj } from '@storybook/react';
import { FaqComponent as FaqComponentComponent } from '@pages/Landingpage/FaqComponent';

const meta = {
  title: 'Pages/Landingpage',
  component: FaqComponentComponent,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof FaqComponentComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FaqComponent: Story = {}