import { cn } from '../../../utils';
import Loading from './Loading';
import { useSearchBarContext } from './SearchBarContext';
import SearchResult from './SearchResult';
import NotFound from './NotFound';
import Suggestion from './Suggestion';
import { defaultOptions } from './mockData';
import { Badge } from '../../Core';

export default function ResultCard() {
	const { open, loading, value, suggestions, results, selectedFilters } = useSearchBarContext();

	const getComponents = ({ loading, value, results, suggestions }) => {
		if (loading) {
			return <Loading value={value} />;
		}
		if (
			value &&
			(selectedFilters.find((filter) => filter.active) ||
				results.popular.length ||
				results.suggested.length)
		) {
			return <SearchResult />;
		}
		if (value) {
			return <NotFound />;
		}
		return <Suggestion results={suggestions} />;
	};

	if (!open) {
		return (
			<div className="flex justify-center">
				<div className="my-10 space-x-2">
					{defaultOptions.map((option) => (
						<Badge
							variant={'success'}
							key={option.name}
							className="rounded-full bg-[#A9F2CE0A] px-4 py-1.5 text-sm font-normal">
							{option.name}
						</Badge>
					))}
				</div>
			</div>
		);
	}

	return (
		<div className={cn('absolute z-50 w-full rounded-2xl bg-[#212D29] px-10 py-5 shadow-lg')}>
			{getComponents({ loading, value, results, suggestions })}
		</div>
	);
}
