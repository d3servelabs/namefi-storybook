import type { Meta, StoryObj } from '@storybook/react';

import {FullPage as FullPageStory} from './FullPage';
import '../../../index.css'
import '../../../App.css'
import { deterministicMoment } from '../../consts';

const meta = {
  title: 'Templates/DomainOwned/FullPage',
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
      ownedDomainsProps: {
        domainTileProps: {
          domainName: 'namefi.io',
          status: 'TAKEN',
          sameOwner: true,
          loading: false,
          showExpiration: true,
          expirationDate: deterministicMoment.add(1, 'year').toDate(),
        },
        tlds: ['.eth', '.btc'], 
        domains: [
          {domainName:'namefi2024.com'},
          {domainName:'namefi.net'},
          {domainName:'namefi.ai'},
          {domainName:'namefi2024.com'},
          {domainName:'namefi.net'},
          {domainName:'namefi.ai'},
        ]
      },
      domainCardProps: {
        
        domainName: 'namefi.io',
        status: 'TAKEN',
        loading: false,
        showExpiration: true,
        showOwner: true,
        sameOwner: true,
        expirationDate: deterministicMoment.add(1, 'year').toDate(),
        
      },
      
    }
  }
}