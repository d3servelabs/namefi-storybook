import type { Meta, StoryObj } from '@storybook/react';

import { DomainAvailableCard as DomainCardComponent } from '../../components/DomainAvailableCard';

const meta = {
  title: 'Components/DomainAvailableCard',
  component: DomainCardComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof DomainCardComponent>;

export default meta;
type Story = StoryObj<typeof meta>; 

export const DomainCard: Story = {
  args:{
    domainName: 'namefi.io',
    loading: false,
  }
};
export const LoadingDomainCard: Story = {
  args:{
    domainName: 'namefi.io',
    loading: true,
  }
};