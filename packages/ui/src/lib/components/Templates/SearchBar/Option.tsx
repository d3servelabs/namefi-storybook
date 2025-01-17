import { ArrowRight, Clock, SearchIcon, X } from 'lucide-react';
import { useSearchBarContext } from './SearchBarContext';
import { Badge } from '../../Core/Badge';

export default function Option({ option }) {
	const { value } = useSearchBarContext();

	const highlightMatch = (text, highlight) => {
		if (!highlight) return text;

		const regex = new RegExp(`(${highlight})`, 'gi');
		const parts = text.split(regex);

		return parts.map((part, index) =>
			part.toLowerCase() === highlight.toLowerCase() ? (
				<span key={index} className="text-primary-500">
					{part}
				</span>
			) : (
				part
			),
		);
	};

	return (
		<li className="flex justify-between rounded-2 px-3 py-5 hover:cursor-pointer hover:bg-[#FFFFFF0A]/5">
			<div className="flex flex-row space-x-5">
				{option.taken ? (
					<Clock className="my-auto h-[18px] w-[18px] cursor-pointer text-[#E9FDF370]" />
				) : (
					<SearchIcon className="my-auto h-[18px] w-[18px] cursor-pointer text-[#E9FDF370]" />
				)}

				<div className="space-y-2">
					<div className="flex flex-row space-x-2">
						<span className="my-auto cursor-pointer font-primary text-lg font-medium text-white">
							{highlightMatch(option.name, value)}
						</span>

						<div className="flex space-x-1">
							{option.offer && (
								<Badge variant={'success'} className="font-normal">
									{option.offer}
								</Badge>
							)}
							{option.onSale && (
								<Badge variant={'warning'} className="font-normal">
									Sale
								</Badge>
							)}
							{option.taken && (
								<Badge variant={'disabled'} className="font-normal">
									Sale
								</Badge>
							)}
						</div>
					</div>
					<span className="my-auto block font-primary text-base text-[#E9FDF370] md:hidden">
						{option.price}
					</span>
				</div>
			</div>

			<div className="flex flex-row space-x-5">
				<span className="my-auto hidden font-primary text-base text-[#E9FDF370] md:block">
					{option.price}
				</span>
				{option.taken ? (
					<X className="my-auto h-4 w-4 cursor-pointer text-[#E9FDF370]" />
				) : (
					<ArrowRight className="my-auto h-4 w-4 cursor-pointer text-[#E9FDF370]" />
				)}
			</div>
		</li>
	);
}
