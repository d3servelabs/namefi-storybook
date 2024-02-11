import type { Meta, StoryObj } from '@storybook/react';

import HomePage from './HomePage';
import '../../../index.css'
import '../../../App.css'

const meta = {
  title: 'Pages/HomePage/FullPage',
  component: HomePage,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof HomePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullPage: Story = {
  args: {
    pageLayoutProps: {
      headerProps: {
        includeSearchBar: true,
        headerSearchProps: {
          placeholderText: 'Search another domain'
        }
      },
      children: null
    },
  }
}