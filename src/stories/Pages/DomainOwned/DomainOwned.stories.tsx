import type { Meta, StoryObj } from '@storybook/react';

import {FullPage as FullPageStory} from './FullPage';
import '../../../index.css'
import '../../../App.css'

const meta = {
  title: 'Pages/DomainOwned/FullPage',
  component: FullPageStory,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof FullPageStory>;

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
    domainOwnedProps: {
      
      domainCardProps: {
        domainName: 'namefi.io'
      },
    }
  }
}