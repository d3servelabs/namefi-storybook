import { SearchBarProvider } from './SearchBarContext';
import SearchBar from './SearchBar';
import { SearchResult } from './mockData';
import { AvailableOption } from './AvailableOptionTypes';

export type SearchBarComponentProps = {
	results: SearchResult;
	suggestions: SearchResult;
	setSearchString: React.Dispatch<React.SetStateAction<string>>;
	availableDomainTypes: AvailableOption[];
	setActiveDomainType: React.Dispatch<React.SetStateAction<string>>;
};

export function SearchBarComponent(
	{ results, suggestions, setSearchString, availableDomainTypes, setActiveDomainType },
	SearchBarComponentProps,
) {
	return (
		<SearchBarProvider>
			<SearchBar
				results={results}
				suggestions={suggestions}
				setSearchString={setSearchString}
				availableDomainTypes={availableDomainTypes}
				setActiveDomainType={setActiveDomainType}
			/>
		</SearchBarProvider>
	);
}
