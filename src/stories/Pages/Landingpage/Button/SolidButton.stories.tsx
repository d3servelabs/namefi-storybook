import type { Meta, StoryObj } from '@storybook/react';
import { SolidButton as SolidButtonComponent } from '../../../../pages/Landingpage/SolidButton';
const meta = {
  title: 'Pages/Landingpage/Button',
  component: SolidButtonComponent,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof SolidButtonComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SolidButton: Story = {}