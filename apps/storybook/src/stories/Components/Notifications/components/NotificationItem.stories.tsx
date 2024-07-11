import type { Meta, StoryObj } from '@storybook/react';
import { NotificationItem } from '@namefi/ui';

const meta = {
	title: 'Components/Notifications/Components/NotificationItem',
	component: NotificationItem,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof NotificationItem>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
	argTypes: {
		title: { control: 'text' },
		children: { control: 'text' },
		count: { control: 'number' },
		datetime: { control: 'date' },
		onClick: { action: 'onClick' },
		className: { control: 'text' },
	},
	args: {
		title: 'Mint NFT',
		children: 'Started minting example.com',
		count: 3,
		datetime: new Date(),
		className: 'w-[490px]',
	},
};
