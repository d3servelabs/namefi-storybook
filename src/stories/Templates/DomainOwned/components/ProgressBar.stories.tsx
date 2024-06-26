import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from '../../../../components/Templates/DomainOwned/components/ProgressBar';

const meta = {
	title: 'Templates/DomainOwned/Components/ProgressBar',
	component: ProgressBar,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof ProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		value: { control: 'number' },
		className: { control: 'text' },
	},
	args: {
		value: 30,
		className: 'w-[240px]',
	},
};
