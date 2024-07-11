import React, { useMemo } from 'react';
import moment from 'moment';
import { cn } from '../../../../utils/cn';

const usePrettyDate = (date: Date) =>
	useMemo(() => {
		const target = moment(date);
		const now = moment();
		return target.isSame(now, 'day')
			? target.format('hh:mm')
			: target.isSame(now, 'year')
				? target.format('MM-DD')
				: target.format('YYYY-MM-DD');
	}, [date]);

export interface NotificationItemProps {
	title: string;
	children: React.ReactNode;
	count: number;
	datetime: Date;
	onClick?: () => void;
	className?: string;
}

export const NotificationItem = ({
	title,
	children,
	count,
	datetime,
	onClick,
	className,
}: NotificationItemProps) => {
	const prettyDatetime = usePrettyDate(datetime);
	return (
		<div
			className={cn(
				'flex items-start justify-between rounded-2.5 border border-[#5a5a5a] p-4',
				className,
			)}
			onClick={onClick}>
			<div className="flex flex-col gap-y-1">
				<div className="font-primary text-base text-primary-500">[ {title} ]</div>
				<div className="font-primary text-sm text-black-500">{children}</div>
			</div>
			<div className="flex flex-col items-center gap-y-1">
				<div className="flex h-6 items-center">
					<div className="flex min-w-5 items-center justify-center rounded-full bg-primary-light p-1 font-primary text-xs leading-none text-brand-black">
						{count}
					</div>
				</div>
				<div className="font-primary text-sm text-black-500">{prettyDatetime}</div>
			</div>
		</div>
	);
};
