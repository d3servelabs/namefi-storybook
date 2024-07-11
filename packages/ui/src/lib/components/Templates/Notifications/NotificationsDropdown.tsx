import React from 'react';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { Button, SolidButton } from '../../Core/Buttons';
import { BellIcon } from '../../Core/icons/Bell';
import { NotificationItem } from './components/NotificationItem';
import { Dropdown } from './components/Dropdown';

export interface NotificationData {
	id: string;
	title: string;
	message: React.ReactNode;
	count: number;
	createdAt: Date;
}

export interface NotificationsDropdownProps {
	unreadTotal: number;
	notifications: NotificationData[];
	onClickItem: (item: NotificationData) => void;
	onClickClear: () => void;
	onClickActivities: () => void;
	className: string;
}

export const NotificationsDropdown = ({
	unreadTotal,
	notifications,
	onClickItem,
	onClickClear,
	onClickActivities,
	className,
}: NotificationsDropdownProps) => {
	return (
		<Dropdown.Root className={className}>
			<Dropdown.Header>
				<BellIcon className="mr-2 text-primary-500" />
				<span className="tracking-wide text-white">Notifications</span>{' '}
				{unreadTotal && (
					<span className="ml-2 inline-block text-primary-500">({unreadTotal})</span>
				)}
			</Dropdown.Header>
			<Dropdown.Body className="flex flex-col gap-y-2 py-4">
				{notifications.map((notification) => (
					<NotificationItem
						key={notification?.id}
						title={notification?.title}
						count={notification?.count}
						datetime={notification?.createdAt}
						onClick={() => onClickItem(notification)}>
						{notification?.message}
					</NotificationItem>
				))}
			</Dropdown.Body>
			<Dropdown.Footer>
				<Button
					className="w-auto border-white font-primary text-sm text-white"
					onClick={onClickClear}>
					Clear cart
				</Button>
				<SolidButton className="w-auto font-primary text-base" onClick={onClickActivities}>
					View Activities <ArrowRightIcon />
				</SolidButton>
			</Dropdown.Footer>
		</Dropdown.Root>
	);
};
