'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { defaultOptions, SearchResult } from './mockData';
import { AvailableOption } from './AvailableOptionTypes';

type SearchBarContextType = {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	loading: boolean;
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
	value: string;
	setValue: React.Dispatch<React.SetStateAction<string>>;
	selectedFilters: AvailableOption[];
	setSelectedFilters: React.Dispatch<React.SetStateAction<AvailableOption[]>>;
	suggestions: SearchResult | {};
	setSuggestions: React.Dispatch<React.SetStateAction<SearchResult>>;
	results: SearchResult | {};
	setResults: React.Dispatch<React.SetStateAction<SearchResult>>;
};

const SearchBarContext = createContext<SearchBarContextType | undefined>(undefined);

export const SearchBarProvider = ({ children }: { children: ReactNode }) => {
	const [open, setOpen] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);
	const [value, setValue] = useState<string>('');
	const [selectedFilters, setSelectedFilters] = useState<AvailableOption[]>(defaultOptions);
	const [suggestions, setSuggestions] = useState<SearchResult | {}>({});
	const [results, setResults] = useState<SearchResult | {}>({});

	// Effect to reset selectedFilters when value changes to an empty string
	useEffect(() => {
		if (value === '') {
			setSelectedFilters(defaultOptions);
		}
	}, [value]);

	return (
		<SearchBarContext.Provider
			value={{
				open,
				setOpen,
				loading,
				setLoading,
				value,
				setValue,
				selectedFilters,
				setSelectedFilters,
				suggestions,
				setSuggestions,
				results,
				setResults,
			}}>
			{children}
		</SearchBarContext.Provider>
	);
};

export const useSearchBarContext = () => {
	const context = useContext(SearchBarContext);
	if (!context) {
		throw new Error('useSearchBarContext must be used within a SearchBarProvider');
	}
	return context;
};
