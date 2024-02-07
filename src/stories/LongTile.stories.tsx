import type { Meta, StoryObj } from '@storybook/react';

import { LongTile } from '../components/LongTile';

const meta = {
  title: 'Components/LongTile',
  component: LongTile,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof LongTile>;

export default meta;
type Story = StoryObj<typeof meta>; 

export const LongTileStory: Story = {
  args: {
    key: '1',
    domainName: 'namefi.com'
  }
};