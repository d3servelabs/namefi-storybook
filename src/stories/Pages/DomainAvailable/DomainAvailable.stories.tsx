import type { Meta, StoryObj } from '@storybook/react';
import moment from "moment";

import {FullPage as FullPageComponent} from './FullPage';
import '../../../index.css'
import '../../../App.css'

const meta = {
  title: 'Pages/DomainAvailable/FullPage',
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
    
    domainAvailableContentProps: {
      ownedDomainsProps: {
          onTldClicked: () => {},
          domainTileProps: {
            domainName: 'namefi.io',
            status: 'AVAILABLE',
            loading: false,
            showExpiration: true,
            expirationDate: moment().add(1, 'year').toDate(),
          }
      },
      domainCardProps: {
        
        domainName: 'namefi.io',
        status: 'AVAILABLE',
        loading: false,
        showExpiration: true,
        expirationDate: moment().add(1, 'year').toDate(),
        
      },
      domainAvailableProps: {
        domainAvailableRegisterFormProps: {
          userAddress: '',
          onRegisterClicked: () => {},
          onYearsChanged: () => {},
          
        },
        userAddress: ''
      }
    }
  }
}