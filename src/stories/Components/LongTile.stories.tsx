import type { Meta, StoryObj } from '@storybook/react';

import { DomainTile } from '../../components/DomainTile';
import moment from "moment";

const meta = {
  title: 'Components/LongTile',
  component: DomainTile,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
      onAddClicked: {action: 'onAddClicked'}
  },
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof DomainTile>;

export default meta;
type Story = StoryObj<typeof meta>; 

export const AvailableDomainTile: Story = {
  
  args: {
        key: '1',
        domainName: 'namefi.com',
        status: 'AVAILABLE',
    }
};
export const OwnedDomainTile: Story = {
  
  args: {
        key: '1',
        domainName: 'namefi.com',
        status: 'TAKEN',
        showExpiration:true,
        sameOwner: true,
        expirationDate: moment().add(1, 'year').toDate(),
    }
};
export const TakenDomainTile: Story = {
  
  args: {
        key: '1',
        domainName: 'namefi.com',
        status: 'TAKEN',
        sameOwner: false,
        showExpiration:false,
        expirationDate: moment().add(1, 'year').toDate(),
    }
};