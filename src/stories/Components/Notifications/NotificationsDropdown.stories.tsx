import type { Meta, StoryObj } from '@storybook/react';
import {
	NotificationsDropdown,
	type NotificationData,
} from '../../../components/Templates/Notifications';
import { LinkIcon } from '../../../components/Core/icons/Link';

const meta = {
	title: 'Components/Notifications/NotificationsDropdown',
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
		message: (
			<>
				Started minting{' '}
				<a href="https://example.com/" target="_blank">
					example.com <LinkIcon className="text-primary-500" />
				</a>
			</>
		),
		count: 3,
		createdAt: new Date(),
	},
	{
		id: '2',
		title: 'Burn NFT',
		message: (
			<>
				Started burning example.com{' '}
				<a href="https://example.com/" target="_blank">
					example.com <LinkIcon className="text-primary-500" />
				</a>
			</>
		),
		count: 2,
		createdAt: new Date(),
	},
	{
		id: '1',
		title: 'Register',
		message: (
			<>
				Started registering example.com{' '}
				<a href="https://example.com/" target="_blank">
					example.com <LinkIcon className="text-primary-500" />
				</a>
			</>
		),
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
