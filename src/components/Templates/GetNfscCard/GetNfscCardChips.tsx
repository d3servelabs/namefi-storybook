import { Chip } from '../../Core';
import { cn } from '../../../utils/cn';

function GetNfscCardChips({
	onClickChip,
	chipValues,
	selectedValue,
	children,
	className,
	...props
}: React.ComponentProps<'div'> & {
	onClickChip: any;
	chipValues: number[];
	selectedValue: number;
}) {
	return (
		<div
			className={cn(
				'flex flex-wrap gap-3 w-full h-fit justify-start items-center',
				className,
			)}
			{...props}>
			{chipValues?.map((chipValue) => (
				<Chip
					key={chipValue}
					selected={selectedValue === chipValue}
					onSelect={() => onClickChip(chipValue)}>
					{chipValue}
				</Chip>
			))}
		</div>
	);
}

export default GetNfscCardChips;
