import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from '../../../../components/Templates/ImportFlow/components/Spinner';

const meta = {
	title: 'Templates/DomainImportFlow/Components/Spinner',
	component: Spinner,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		className: { control: 'text' },
	},
	args: {
		className: '',
	},
};
