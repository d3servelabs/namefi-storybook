import type { Meta, StoryObj } from '@storybook/react';
import { LaunchDapp as LaunchDappComponent } from '../../../pages/Landingpage/LaunchDapp';

const meta = {
  title: 'Pages/Landingpage',
  component: LaunchDappComponent,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof LaunchDappComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LaunchDapp: Story = {}