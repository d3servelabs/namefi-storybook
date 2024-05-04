import type { Meta, StoryObj } from '@storybook/react';
import { ProudlySupporting as SupportingComponent } from '../../../pages/Landingpage/ProudlySupporting';

const meta = {
  title: 'Pages/Landingpage',
  component: SupportingComponent,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof SupportingComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProudlySupporting: Story = {}