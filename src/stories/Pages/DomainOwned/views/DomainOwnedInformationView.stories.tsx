import type { Meta, StoryObj } from '@storybook/react';
import '../../../../index.css';
import '../../../../App.css';
import { Information } from '../../../../pages/DomainOwned/views/Information';

const meta = {
	title: 'Components/DomainOwned/Views/Information',
	component: Information,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof Information>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		links: { control: 'object' },
		onClickTransfer: { action: 'onClickTransfer' },
		onClickListForSale: { action: 'onClickListForSale' },
		onClickBorrow: { action: 'onClickBorrow' },
		className: { control: 'text' },
	},
	args: {
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
		className: 'w-[440px]',
	},
	tags: ['autodocs'],
};
