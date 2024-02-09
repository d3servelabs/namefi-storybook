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
    domainOwnedProps: {
      domainCardProps: {
        loading: false,
        userAddress: '0xfdB5929A4a3e5a98D70c76E86681cFfdfbf47Fe4',
        domainName: 'namefi.eth',
        isOwned: true,
        isOwnedOrTaken: true
      }
    }
  }
}