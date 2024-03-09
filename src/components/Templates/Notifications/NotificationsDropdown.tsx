import React from 'react';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { Button, SolidButton } from '../../Core/Buttons';
import { BellIcon } from '../../Core/icons/Bell';
import { NotificationItem } from './NotificationItem';
import { cn } from '../../../utils/cn';

export interface NotificationData {
	id: string;
	title: string;
	message: string;
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
		<div
			className={cn(
				'bg-black-900 drop-shadow-[0_0_20px_rgba(255,239,239,0.15)] rounded-8 pt-6 pb-8 px-3 flex flex-col',
				className,
			)}>
			<div className="text-lg font-semibold flex items-center px-4 pb-3 border-b border-border-500">
				<BellIcon className="text-primary-500 mr-2" />
				<span className="text-white tracking-wide">Notifications</span>{' '}
				{unreadTotal && (
					<span className="ml-2 inline-block text-primary-500">({unreadTotal})</span>
				)}
			</div>
			<div className="flex flex-col py-4 gap-y-2">
				{notifications.map((notification) => (
					<NotificationItem
						key={notification?.id}
						title={notification?.title}
						message={notification?.message}
						count={notification?.count}
						datetime={notification?.createdAt}
						onClick={() => onClickItem(notification)}
					/>
				))}
			</div>
			<div className="border-t border-border-500 flex justify-end pt-6 px-4 gap-x-4">
				<Button className="text-sm text-white font-primary border-white w-auto" onClick={onClickClear}>
					Clear cart
				</Button>
				<SolidButton className="text-base font-primary w-auto" onClick={onClickActivities}>
					View Activities <ArrowRightIcon />
				</SolidButton>
			</div>
		</div>
	);
};
