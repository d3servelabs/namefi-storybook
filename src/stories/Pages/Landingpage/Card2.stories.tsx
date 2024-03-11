import type { Meta, StoryObj } from '@storybook/react';
import { Card2 as DomainCardComponent } from '../../../pages/Landingpage/DomainCard';
const meta = {
  title: 'Pages/Landingpage',
  component: DomainCardComponent,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof DomainCardComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Card2: Story = {}