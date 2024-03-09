import React, { useMemo } from 'react';
import moment from 'moment';
import { cn } from '../../../../utils/cn';
import { LinkifyContent } from './LinkifyContent';

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
	message: React.ReactNode;
	count: number;
	datetime: Date;
	onClick?: () => void;
	className?: string;
}

export const NotificationItem = ({
	title,
	message,
	count,
	datetime,
	onClick,
	className,
}: NotificationItemProps) => {
	const prettyDatetime = usePrettyDate(datetime);
	return (
		<div
			className={cn(
				'p-4 flex justify-between items-start border border-[#5a5a5a] rounded-2.5',
				className,
			)}
			onClick={onClick}>
			<div className="flex flex-col gap-y-1">
				<div className="text-base text-primary-500 font-primary">[ {title} ]</div>
				<div className="text-sm text-black-500 font-primary">
					<LinkifyContent content={message} />
				</div>
			</div>
			<div className="flex flex-col gap-y-1 items-center">
				<div className="flex items-center h-6">
					<div className="text-xs text-brand-black font-primary leading-none bg-primary-light p-1 min-w-5 rounded-full flex justify-center items-center">
						{count}
					</div>
				</div>
				<div className="text-sm text-black-500 font-primary">{prettyDatetime}</div>
			</div>
		</div>
	);
};
