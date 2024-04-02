import type { Meta, StoryObj } from '@storybook/react';
import { BackedBy as BackedByComponent } from '../../../pages/Landingpage/BackedBy';

const meta = {
  title: 'Pages/Landingpage',
  component: BackedByComponent,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof BackedByComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BackedBy: Story = {}