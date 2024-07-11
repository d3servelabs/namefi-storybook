import moment from 'moment';
import React from "react";

export default function DomainSettingsExpirationDate({
	date,
	className,
	...props
}: React.ComponentProps<'div'> & { date?: Date }) {
	return (
		<div className="text-yellow-300 text-xs font-normal font-['Roboto'] leading-snug tracking-wide mb-3">
			Expires on {moment(date).format('MMM DD, YYYY')}
		</div>
	);
}
