import React from 'react';
import { cn } from '../../utils/cn';
import NamefiBrandText from '../NamefiBrandText';

export default function DomainStatus({
	className,
	status,
}: {
	children?: React.ReactNode;
	className?: string;
	status?: DomainStatusEnum;
}) {
	return (
		<NamefiBrandText
			className={cn(
				'text-2xl text-primary-500',
				status === DomainStatusEnum.YOU_OWN_THIS && 'text-[#FEF556]',
				status === DomainStatusEnum.TAKEN && 'text-[#3488FC]',
				className,
			)}>
			{status}
		</NamefiBrandText>
	);
}


export enum DomainStatusEnum {
	TAKEN = 'Taken',
	AVAILABLE = 'Available',
	YOU_OWN_THIS = 'You Own This',
}

