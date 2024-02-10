import type { Meta, StoryObj } from '@storybook/react';

import { DomainTile } from '../../components/DomainTile';

const meta = {
  title: 'Components/LongTile',
  component: DomainTile,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof DomainTile>;

export default meta;
type Story = StoryObj<typeof meta>; 

export const AvailableDomainTile: Story = {
  args: {
    key: '1',
    domainName: 'namefi.com',
    isAvailable: true
  }
};
export const OwnedDomainTileStory: Story = {
  args: {
    key: '1',
    domainName: 'namefi.com',
    isAvailable: false
  }
};