import type { Meta, StoryObj } from '@storybook/react';
import {
	NotificationsDropdown,
	type NotificationData,
} from '../../../../components/Templates/Notifications';

const meta = {
	title: 'Pages/Notifications/NotificationsDropdown',
	component: NotificationsDropdown,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof NotificationsDropdown>;

export default meta;

const NOTIFICATION_DATAS: NotificationData[] = [
	{
		id: '3',
		title: 'Mint NFT',
		message: 'Started minting example.com',
		count: 3,
		createdAt: new Date(),
	},
	{
		id: '2',
		title: 'Burn NFT',
		message: 'Started burning example.com',
		count: 2,
		createdAt: new Date(),
	},
	{
		id: '1',
		title: 'Register',
		message: 'Started registering example.com',
		count: 2,
		createdAt: new Date(),
	},
];

type Story = StoryObj<typeof meta>;
export const Default: Story = {
	argTypes: {
		unreadTotal: { control: 'number' },
		notifications: { control: 'object' },
		onClickItem: { action: 'onClickItem' },
		onClickClear: { action: 'onClickClear' },
		onClickActivities: { action: 'onClickActivities' },
		className: { control: 'text' },
	},
	args: {
		unreadTotal: 3,
		notifications: NOTIFICATION_DATAS,
		className: 'w-[515px]',
	},
};
