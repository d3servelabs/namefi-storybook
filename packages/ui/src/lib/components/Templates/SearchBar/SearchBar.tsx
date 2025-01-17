'use client';

import * as React from 'react';
import ResultCard from './ResultCard';
import SearchBarInput from './SearchBarInput';
import { useSearchBarContext } from './SearchBarContext';

export default function SearchBar({
	results,
	suggestions,
	setSearchString,
	availableDomainTypes,
	setActiveDomainType,
}) {
	const inputRef = React.useRef<HTMLInputElement | null>(null);

	const { open, selectedFilters, setOpen, setResults, setSuggestions, setSelectedFilters } =
		useSearchBarContext();

	const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
		// Check if the related target (next focused element) is inside the container
		if (!inputRef.current?.contains(event.relatedTarget)) {
			setOpen(false); // Close the dropdown
		}
	};

	React.useEffect(() => {
		setResults(results);
	}, [results]);

	React.useEffect(() => {
		setSuggestions(suggestions);
	}, [suggestions]);

	React.useEffect(() => {
		setSelectedFilters(availableDomainTypes);
	}, [availableDomainTypes]);

	React.useEffect(() => {
		setActiveDomainType(selectedFilters.find((filter) => filter.active)?.name ?? '');
	}, [selectedFilters]);

	return (
		<div
			className="relative space-y-4"
			ref={inputRef}
			tabIndex={-1} // Allow the div to receive focus
			onBlur={handleBlur}>
			<SearchBarInput setSearchString={setSearchString} />
			<ResultCard />
		</div>
	);
}
