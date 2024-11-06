import type { Meta } from '@storybook/react';
import { HeaderSearchBar } from '@namefi/ui';

const meta = {
	title: 'Components/HeaderSearchBar',
	component: HeaderSearchBar,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof HeaderSearchBar>;

export default meta;

export const HeaderSearchBarStory = {
	args: {
		placeholderText: 'namefi.com',
	},
};
