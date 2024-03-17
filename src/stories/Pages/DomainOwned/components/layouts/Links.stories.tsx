import type { Meta, StoryObj } from '@storybook/react';
import '../../../../../index.css';
import '../../../../../App.css';
import { DomainOwnedLayout } from '../../../../../pages/DomainOwned/components/DomainOwnedLayout';

const meta = {
	title: 'Components/DomainOwned/Components/Layouts/Links',
	component: DomainOwnedLayout.Links,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof DomainOwnedLayout.Links>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Links: Story = {
	argTypes: {
		title: { control: 'text' },
		links: { control: 'object' },
		className: { control: 'text' },
	},
	args: {
		title: 'Lorem ipsum ',
		links: [
			{
				children: 'Etherscan',
				href: 'https://etherscan.io/',
			},
			{
				children: 'Blockscout',
				href: 'https://blockscout.com/',
			},
			{
				children: 'OpenSea',
				href: 'https://opensea.io/',
			},
			{
				children: 'Blur',
				href: 'https://blur.cash/',
			},
			{
				children: 'LooksRare',
				href: 'https://looksrare.org/',
			},
		],
		className: '',
	},
	tags: ['autodocs'],
};
