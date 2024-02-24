import type { Meta, StoryObj } from "@storybook/react";
import { DomainCard } from "@components/DomainCard";
import moment from "moment";
import { deterministicMoment } from "@stories/consts";

const meta = {
    title: 'Components/DomainCard',
    component: DomainCard,
    tags: ['autodocs'],
    argTypes: {
        onSettingsClicked: {action: 'onSettingsClicked'}
    },
    parameters: {
        layout: 'centered'
    }
}satisfies Meta<typeof DomainCard>

export default meta;
type Story = StoryObj<typeof meta>


export const DomainAvailableCard: Story = {
    args: {
        domainName: 'namefi.io',
        status: 'AVAILABLE',
    }
}

export const DomainTakenCard: Story = {
    args: {
        domainName: 'namefi.com',
        ownerAddress: '0xfdB5929A4a3e5a98D70c76E86681cFfdfbf47Fe4',
        status: 'TAKEN',
        showOwner:true,
        showExpiration:true,
        expirationDate: deterministicMoment.add(1, 'year').toDate(),
    }
} 

export const OwnedDomainCard: Story = {
    args: {
        domainName: 'namefi.eth',
        ownerAddress: '0xfdB5929A4a3e5a98D70c76E86681cFfdfbf47Fe4',
        status: 'TAKEN',
        showOwner:true,
        sameOwner: true,
        showExpiration:true,
        expirationDate: deterministicMoment.add(1, 'year').toDate(),
    }
}

