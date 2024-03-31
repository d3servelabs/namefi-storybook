import type { Meta, StoryObj } from '@storybook/react';
import '../../../../../index.css';
import '../../../../../App.css';
import { ActionButton } from '../../../../../components/Templates/ImportFlow/components/ActionButton';
import { ImportFlowLayout } from '../../../../../components/Templates/ImportFlow/components/ImportFlowLayout';

const meta = {
	title: 'Templates/DomainImportFlow/Components/Layouts/Actions',
	component: ImportFlowLayout.Actions,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof ImportFlowLayout.Actions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		children: { control: 'object' },
		className: { control: 'text' },
	},
	args: {
		children: <ActionButton>Submit</ActionButton>,
		className: '',
	},
	tags: ['autodocs'],
};
