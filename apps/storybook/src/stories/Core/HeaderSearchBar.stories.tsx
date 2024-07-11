import type { Meta, StoryObj } from '@storybook/react';
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

type Story = StoryObj<typeof meta>;

export const HeaderSearchBarStory = {
	args: {
		placeholderText: 'namefi.com',
	},
};
