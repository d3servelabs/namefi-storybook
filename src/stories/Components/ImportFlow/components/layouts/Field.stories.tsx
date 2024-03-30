import type { Meta, StoryObj } from '@storybook/react';
import '../../../../../index.css';
import '../../../../../App.css';
import { ImportFlowLayout } from '../../../../../components/ImportFlow/components/ImportFlowLayout';

const meta = {
	title: 'Components/ImportFlow/Components/Layouts/Field',
	component: ImportFlowLayout.Field,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof ImportFlowLayout.Field>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		label: { control: 'text' },
		tooltip: { control: 'text' },
		children: { control: 'text' },
		className: { control: 'text' },
	},
	args: {
		label: 'Label',
		tooltip: 'tooltip',
		children: 'Children',
		className: '',
	},
	tags: ['autodocs'],
};
