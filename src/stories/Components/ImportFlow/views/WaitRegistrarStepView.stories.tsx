import type { Meta, StoryObj } from '@storybook/react';
import '../../../../index.css';
import '../../../../App.css';
import { WaitRegistrarStep } from '../../../../components/ImportFlow/views/WaitRegistrarStep';

const meta = {
	title: 'Components/ImportFlow/Views/WaitRegistrarStep',
	component: WaitRegistrarStep,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof WaitRegistrarStep>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		status: { control: 'radio', options: ['FIRST_TIME', 'RECHECK'] },
		onClickImportAnother: { action: 'onClickImportAnother' },
		onBack: { action: 'onBack' },
		className: { control: 'text' },
	},
	args: {
		status: 'FIRST_TIME',
		className: 'w-[520px]',
	},
	tags: ['autodocs'],
};
