import type { Meta, StoryObj } from '@storybook/react';
import '../../../../../index.css';
import '../../../../../App.css';
import { DomainOwnedLayout } from '../../../../../components/Templates/DomainOwned/components/DomainOwnedLayout';

const meta = {
	title: 'Templates/DomainOwned/Components/Layouts/Progress',
	component: DomainOwnedLayout.Progress,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof DomainOwnedLayout.Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Progress: Story = {
	argTypes: {
		progress: { control: 'number' },
		description: { control: 'text' },
		href: { control: 'text' },
		className: { control: 'text' },
	},
	args: {
		progress: 50,
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		href: 'https://etherscan.io/',
		className: '',
	},
	tags: ['autodocs'],
};
