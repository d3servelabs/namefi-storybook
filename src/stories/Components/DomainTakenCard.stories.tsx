import type { Meta, StoryObj } from '@storybook/react';

import { DomainTakenCard  } from '../../components/DomainTakenCard';

const meta = {
  title: 'Components/DomainTakenCard',
  component: DomainTakenCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof DomainTakenCard>;

export default meta;
type Story = StoryObj<typeof meta>; 

export const DomainCard: Story = {
  args:{
    domainName: 'namefi.io',
    loading: false,
  }
};
