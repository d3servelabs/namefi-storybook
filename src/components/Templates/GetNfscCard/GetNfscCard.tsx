import React from 'react';
import { Chip } from '../../Core';
import { cn } from '../../../utils/cn';

export type GetNfscCardProps = React.ComponentProps<'div'> &
	Partial<{
		onClickChip: any;
		chipValues: number[];
		selectedValue: number;
	}>;

const cardTitle = 'Get $NFSC';

export function GetNfscCard({
	onClickChip,
	chipValues,
	selectedValue,
	className,
	...props
}: GetNfscCardProps) {
	return (
		<div
			className={cn(
				'flex flex-col justify-start items-center rounded-3.75 gap-3 py-9 px-11.5 bg-black-1000 max-w-[613px] min-h-[581px]',
				className,
			)}
			{...props}>
			<div className="flex w-full h-fit justify-start items-center">
				<h2 className="text-white">{cardTitle}</h2>
			</div>
			<div className="flex wrap gap-3 w-full h-fit justify-start items-center">
				{chipValues?.map((chipValue) => (
					<Chip
						key={chipValue}
						selected={selectedValue === chipValue}
						onSelect={() => onClickChip(chipValue)}>
						{chipValue}
					</Chip>
				))}
			</div>
		</div>
	);
}
