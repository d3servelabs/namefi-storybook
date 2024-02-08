import type { Meta, StoryObj } from '@storybook/react';

import { DomainOwnedCard as DomainCard  } from '../../components/DomainOwnedCard';

const meta = {
  title: 'Components/DomainOwnedCard',
  component: DomainCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof DomainCard>;

export default meta;
type Story = StoryObj<typeof meta>; 

export const DomainOwnedCard: Story = {
  args:{
    domainName: 'namefi.io',
    loading: false,
    
  }
};
