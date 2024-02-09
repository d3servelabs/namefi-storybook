import type { Meta, StoryObj } from "@storybook/react";
import { DomainCard } from "@components/DomainCard";

const meta = {
    title: 'Components/DomainCard',
    component: DomainCard,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    }
}satisfies Meta<typeof DomainCard>

export default meta;
type Story = StoryObj<typeof meta>

export const OwnedDomainCard: Story = {
    args: {
        domainName: 'namefi.eth',
        userAddress: '0xfdB5929A4a3e5a98D70c76E86681cFfdfbf47Fe4',
        loading: false,
        isOwned: true,
        isOwnedOrTaken: true
    }
}
export const DomainAvailableCard: Story = {
    args: {
        domainName: 'namefi.io',
        userAddress: '',
        loading: false,
        isAvailable: true,
        isOwnedOrTaken: false
    }
}
export const DomainTakenCard: Story = {
    args: {
        domainName: 'namefi.com',
        userAddress: '0xfdB5929A4a3e5a98D70c76E86681cFfdfbf47Fe4',
        loading: false,
        isTaken: true,
        isOwnedOrTaken: true
    }
}