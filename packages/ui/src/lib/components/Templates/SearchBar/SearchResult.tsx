import { ArrowRight, SearchIcon } from 'lucide-react';
import AvailableOptionTypes from './AvailableOptionTypes';
import Suggestion from './Suggestion';
import { useSearchBarContext } from './SearchBarContext';

export default function Result() {
	const { value, selectedFilters, results } = useSearchBarContext();

	let activeFilter = selectedFilters.find((filter) => filter.active);

	const filteredResults = {
		popular: results.popular
			.filter((item) => (activeFilter ? item.type === activeFilter.name : true))
			.slice(0, 3),
		suggested: results.suggested
			.filter((item) => (activeFilter ? item.type === activeFilter.name : true))
			.slice(0, 3),
	};

	return (
		<div>
			<AvailableOptionTypes />
			<div className="mt-5">
				<Suggestion results={filteredResults} />
			</div>
			<div className="border-t-[0.5px] border-[#BBF9DC21]">
				<li className="mt-2 flex justify-between rounded-2 px-3 py-5 hover:cursor-pointer hover:bg-[#FFFFFF0A]/5">
					<div className="flex flex-row space-x-5">
						<SearchIcon className="my-auto h-[18px] w-[18px] cursor-pointer text-[#E9FDF370]" />
						<span className="my-auto cursor-pointer font-primary text-lg font-medium text-white">
							All search results for "
							<span className="text-primary-500">{value}</span>"
						</span>
					</div>
					<ArrowRight className="my-auto h-4 w-4 cursor-pointer text-[#E9FDF370]" />
				</li>
			</div>
		</div>
	);
}
