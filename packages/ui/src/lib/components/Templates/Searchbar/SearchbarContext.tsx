'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { AvailableOptionsType } from './AvailableOptionTypes';
import { defaultOptions } from './mockData';

type SearchbarContextType = {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
	value: string;
	setValue: React.Dispatch<React.SetStateAction<string>>;
	selectedFilters: AvailableOptionsType[];
	setSelectedFilters: React.Dispatch<React.SetStateAction<AvailableOptionsType[]>>;
};

const SearchbarContext = createContext<SearchbarContextType | undefined>(undefined);

export const SearchbarProvider = ({ children }: { children: ReactNode }) => {
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState('');
	const [selectedFilters, setSelectedFilters] = useState<AvailableOptionsType[]>(defaultOptions);

	return (
		<SearchbarContext.Provider
			value={{ open, setOpen, value, setValue, selectedFilters, setSelectedFilters }}>
			{children}
		</SearchbarContext.Provider>
	);
};

export const useSearchbarContext = () => {
	const context = useContext(SearchbarContext);
	if (!context) {
		throw new Error('useSearchbarContext must be used within a SearchbarProvider');
	}
	return context;
};
