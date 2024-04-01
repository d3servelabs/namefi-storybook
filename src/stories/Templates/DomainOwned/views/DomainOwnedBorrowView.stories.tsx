import type { Meta, StoryObj } from '@storybook/react';
import '../../../../index.css';
import '../../../../App.css';
import { Borrow } from '../../../../components/Templates/DomainOwned/views/Borrow';

const meta = {
	title: 'Templates/DomainOwned/Views/Borrow',
	component: Borrow,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof Borrow>;

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
				children: 'Teller',
				href: 'https://teller.org/',
			},
			{
				children: 'NFTFI',
				href: 'https://nftfi.com/',
			},
		],
		className: 'w-[520px]',
	},
	tags: ['autodocs'],
};
