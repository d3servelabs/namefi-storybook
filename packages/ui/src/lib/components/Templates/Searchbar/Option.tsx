import { ArrowRight, Clock, SearchIcon, X } from 'lucide-react';
import { useSearchbarContext } from './SearchbarContext';

export default function Option({ option }) {
	const { value } = useSearchbarContext();

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

				<span className="my-auto cursor-pointer font-primary text-lg font-medium text-white">
					{highlightMatch(option.name, value)}
				</span>
				<div className="flex space-x-1">
					{option.offer && (
						<span className="rounded-1 bg-[#48E59B14] px-4 text-lg text-primary-500">
							{option.offer}
						</span>
					)}
					{option.onSale && (
						<span className="rounded-1 bg-[#FFAA0112] px-4 text-lg text-[#FFBA1A]">
							Sale
						</span>
					)}
					{option.taken && (
						<span className="rounded-1 bg-[#FFFFFF1F] px-4 text-lg text-[#FFFFFF4D]">
							Taken
						</span>
					)}
				</div>
			</div>
			<div className="flex flex-row space-x-5">
				<span className="my-auto font-primary text-[16px] text-[#E9FDF370]">
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
