import type { Meta, StoryObj } from '@storybook/react';

import { DomainTile } from '@components/DomainTile';
import { deterministicMoment } from '@stories/consts';

const meta = {
	title: 'Components/DomainLongTile',
	component: DomainTile,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ['autodocs'],
	argTypes: {
		onAddClicked: { action: 'onAddClicked' },
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
		domainName: 'namefi.com',
		status: 'AVAILABLE',
	},
};
export const OwnedDomainTile: Story = {
	args: {
		showActions: true,
		domainName: 'namefi.com',
		status: 'TAKEN',
		showExpiration: true,
		sameOwner: true,
		expirationDate: deterministicMoment.add(1, 'year').toDate(),
	},
};
export const TakenDomainTile: Story = {
	args: {
		showActions: true,
		domainName: 'namefi.com',
		status: 'TAKEN',
		sameOwner: false,
		showExpiration: false,
		expirationDate: deterministicMoment.add(1, 'year').toDate(),
	},
};
