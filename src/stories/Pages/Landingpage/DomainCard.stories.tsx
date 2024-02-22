import type { Meta, StoryObj } from '@storybook/react';
import { Card1 as DomainCardComponent } from '@pages/Landingpage/DomainCard';
import '../../../index.css'
import '../../../App.css'

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

export const Card1: Story = {}