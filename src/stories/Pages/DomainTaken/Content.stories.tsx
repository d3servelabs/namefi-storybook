import type { Meta, StoryObj } from '@storybook/react';
import '../../../index.css'
import '../../../App.css'
import {DomainTakenContent} from "../../../pages/DomainTaken/content";
import { deterministicMoment } from '../../../stories/consts';

const meta = { 
  title: 'Pages/DomainTaken/Content',
  component: DomainTakenContent,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/meS5SKN5PdA8HwHT3fuKmp/Namefi-App?type=design&node-id=670-3073&mode=design&t=ySn2Mda92cyJOLTn-4s',
    }
  },
} satisfies Meta<typeof DomainTakenContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Content: Story = {
  args: {
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
  },
}