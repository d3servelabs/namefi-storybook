import React from 'react';
import { cn } from '../../utils/cn';
import { LockClosedIcon, LockOpen1Icon } from '@radix-ui/react-icons';
import moment from 'moment';

export default function DomainExpirationAndLock({
	expirationDate,
	locked,
	className,
	...props
}: React.ComponentProps<'div'> & {
	expirationDate?: Date;
	locked?: boolean;
}) {
	return (
		<div {...props} className={cn('gap-3 h-full flex items-center justify-between', className)}>
			<>
				{locked ? (
					<LockClosedIcon className="w-9.25 h-9.25 text-primary-500" />
				) : (
					<LockOpen1Icon className="w-9.25 h-9.25 text-primary-500" />
				)}
				<div className="w-25 font-secondary">
					<p className="text-[#acacac] text-[11px] font-extrabold tracking-widest ">
						Expires on
					</p>
					<p className="text-[#ededed] text-sm font-extrabold tracking-widest ">
						{moment(expirationDate).format('MMM DD YYYY')}
					</p>
				</div>
			</>
		</div>
	);
}
