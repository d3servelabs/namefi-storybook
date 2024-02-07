import type { Meta, StoryObj } from '@storybook/react';

import { Tile } from '../components/Tile';

const meta = {
  title: 'Components/Tile',
  component: Tile,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof Tile>;

export default meta;
type Story = StoryObj<typeof meta>; 

export const TileStory: Story = {};