import type { Meta, StoryObj } from '@storybook/react';
import { SearchBarComponent } from '@namefi/ui';
import { suggestionsMock } from '../../../../../../packages/ui/src/lib/components/Templates/SearchBar/mockData';

const meta: Meta<typeof SearchBarComponent> = {
	title: 'Components/SearchBar',
	component: SearchBarComponent,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SearchBar: Story = {
	args: {
		results: [],
		suggestions: suggestionsMock,
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		setSearchString: () => {},
		availableDomainTypes: [],
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		setActiveDomainType: () => {},
	},
};
