import type { Meta, StoryObj } from '@storybook/react';
import { BaseButton as BaseButtonComponent } from '../../../../pages/Landingpage/SolidButton';
const meta = {
  title: 'Pages/Landingpage/Button',
  component: BaseButtonComponent,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof BaseButtonComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseButton: Story = {
    args: {
        children: 'BUtton'
    }
}