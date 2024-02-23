import type { Meta, StoryObj } from '@storybook/react';
import '../../../index.css'
import '../../../App.css'
import {DomainAvailableContent} from "../../../pages/DomainAvailable/content";
import {OwnedDomainsGrid} from "@components/OwnedDomainsGrid";
import { deterministicMoment } from '@stories/consts';

const meta = {
  title: 'Pages/DomainAvailable/Content',
  component: DomainAvailableContent,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/meS5SKN5PdA8HwHT3fuKmp/Namefi-App?type=design&node-id=670-3073&mode=design&t=ySn2Mda92cyJOLTn-4s',
    }
  },
} satisfies Meta<typeof DomainAvailableContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Content: Story = { 
  args: {
    domainAvailableProps: {
      userAddress: '',
      domainAvailableRegisterFormProps: {
        onRegisterClicked: () => {},
        onYearsChanged: () => {},
        years:1,
        price: 71,
        userAddress: '0xfdB5929A4a3e5a98D70c76E86681cFfdfbf47Fe4',
        connectButtonProps: {
          onClick: () => {}
        }
      }
    },

    domainCardProps: {
      domainName: 'namefi.io',
      status: 'AVAILABLE',
      loading: false,
      showExpiration: true,
      expirationDate: deterministicMoment.add(1, 'year').toDate(),
      
    },
    ownedDomainsProps: {
      domainTileProps: {
        domainName: 'namefi.io',
        status: 'AVAILABLE',
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
    }
  },
}