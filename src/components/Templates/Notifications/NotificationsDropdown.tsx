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
				<BellIcon className="text-primary-500 mr-2" />
				<span className="text-white tracking-wide">Notifications</span>{' '}
				{unreadTotal && (
					<span className="ml-2 inline-block text-primary-500">({unreadTotal})</span>
				)}
			</Dropdown.Header>
			<Dropdown.Body className="flex flex-col py-4 gap-y-2">
				{notifications.map((notification) => (
					<NotificationItem
						key={notification?.id}
						message={notification?.message}
						title={notification?.title}
						count={notification?.count}
						datetime={notification?.createdAt}
						onClick={() => onClickItem(notification)}
					/>
				))}
			</Dropdown.Body>
			<Dropdown.Footer>
				<Button
					className="text-sm text-white font-primary border-white w-auto"
					onClick={onClickClear}>
					Clear cart
				</Button>
				<SolidButton className="text-base font-primary w-auto" onClick={onClickActivities}>
					View Activities <ArrowRightIcon />
				</SolidButton>
			</Dropdown.Footer>
		</Dropdown.Root>
	);
};
