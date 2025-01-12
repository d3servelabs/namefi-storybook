import type { Meta, StoryObj } from '@storybook/react';
import { SearchBarComponent } from '@namefi/ui';
import {
	defaultOptions,
	resultsMock,
	suggestionsMock,
} from '../../../../../../packages/ui/src/lib/components/Templates/SearchBar/mockData';
import { useState } from 'react';

const meta: Meta<typeof SearchBarComponent> = {
	title: 'Components/SearchBar',
	component: SearchBarComponent,
	tags: ['autodocs'],
	argTypes: {
		results: {
			description: 'An object containing search results',
			control: 'object',
		},
		suggestions: {
			description: 'An object containing suggestions for the search',
			control: 'object',
		},
		setSearchString: {
			description: 'Function to update the search string state',
			action: 'setSearchString', // Log the function in Storybook
		},
		availableDomainTypes: {
			description: 'An array of available domain types',
			control: 'array',
		},
		setActiveDomainType: {
			description: 'String representing the currently active domain type',
			control: 'text',
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SearchBar = () => {
	const [searchString, setSearchString] = useState('');
	const [activeDomainType, setActiveDomainType] = useState('');

	console.log({ searchString, activeDomainType });

	const filteredResults = {
		popular: resultsMock.popular
			.filter(
				(item) =>
					(!activeDomainType || item.type === activeDomainType) &&
					item.name.toLowerCase().includes(searchString.toLowerCase()),
			)
			.slice(0, 3),
		suggested: resultsMock.suggested
			.filter(
				(item) =>
					(!activeDomainType || item.type === activeDomainType) &&
					item.name.toLowerCase().includes(searchString.toLowerCase()),
			)
			.slice(0, 3),
	};

	return (
		<div className="mt-5">
			<SearchBarComponent
				results={filteredResults}
				suggestions={suggestionsMock}
				setSearchString={setSearchString}
				availableDomainTypes={defaultOptions}
				setActiveDomainType={setActiveDomainType}
			/>
		</div>
	);
};
