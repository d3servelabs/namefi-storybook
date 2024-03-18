import type { Meta, StoryObj } from '@storybook/react';
import { StepButton } from '../../../../components/DomainOwned/components/StepButton';
import { ReverseLeftIcon } from '../../../../components/Core/icons/ReverseLeft';

const meta = {
	title: 'Components/DomainOwned/Components/StepButton',
	component: StepButton,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof StepButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		children: { control: 'text' },
		icon: { control: 'object' },
		loading: { control: 'boolean' },
		disabled: { control: 'boolean' },
		onClick: { action: 'onClick' },
		className: { control: 'text' },
	},
	args: {
		children: 'Transfer',
		icon: <ReverseLeftIcon />,
		loading: false,
		disabled: false,
		className: '',
	},
};
