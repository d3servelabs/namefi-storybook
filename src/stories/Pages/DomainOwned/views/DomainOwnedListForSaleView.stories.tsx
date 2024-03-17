import type { Meta, StoryObj } from '@storybook/react';
import '../../../../index.css';
import '../../../../App.css';
import { ListForSale } from '../../../../pages/DomainOwned/views/ListForSale';

const meta = {
	title: 'Components/DomainOwned/Views/ListForSale',
	component: ListForSale,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof ListForSale>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		links: { control: 'object' },
		className: { control: 'text' },
	},
	args: {
		links: [
			{
				children: 'OpenSea',
				href: 'https://opensea.io/',
			},
			{
				children: 'Blur',
				href: 'https://blur.cash/',
			},
			{
				children: 'X2Y2',
				href: 'https://x2y2.io/',
			},
			{
				children: 'LooksRare',
				href: 'https://looksrare.org/',
			},
			{
				children: 'Rarible',
				href: 'https://rarible.com/',
			},
		],
		className: 'w-[480px]',
	},
	tags: ['autodocs'],
};
