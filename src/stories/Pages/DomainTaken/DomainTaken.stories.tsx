import type { Meta, StoryObj } from '@storybook/react';
// import { within, userEvent, expect } from '@storybook/test';

import {FullPage as FullPageComponent} from './FullPage';
import '../../../index.css'
import '../../../App.css'
import { deterministicMoment } from '../../../stories/consts';


const meta = {
  title: 'Pages/DomainTaken/FullPage',
  component: FullPageComponent,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof FullPageComponent>;

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
    domainTakenProps: {
      ownedDomainsProps: {
        domainTileProps: {
          domainName: 'namefi.io',
          status: 'TAKEN',
          sameOwner: false,
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
        status: 'AVAILABLE',
        loading: false,
        showExpiration: true,
        expirationDate: deterministicMoment.add(1, 'year').toDate(),
        
      },
      domainMessageProps:{
        isLoading: false,
        ownerAddress: null,
        buttonProps: {
          children: null,
          onClick: () => {}
        }
      },
      
    }
  }
}