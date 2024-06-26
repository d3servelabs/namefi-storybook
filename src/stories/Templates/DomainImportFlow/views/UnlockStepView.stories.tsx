import type { Meta, StoryObj } from '@storybook/react';
import '../../../../index.css';
import '../../../../App.css';
import { UnlockStep } from '../../../../components/Templates/ImportFlow/views/UnlockStep';

const meta = {
	title: 'Templates/DomainImportFlow/Views/UnlockStep',
	component: UnlockStep,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof UnlockStep>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		status: { control: 'radio', options: ['DEFAULT', 'LOADING', 'LOCKED', 'UNLOCKED'] },
		onClickVerify: { action: 'onClickVerify' },
		onClickNext: { action: 'onClickNext' },
		onBack: { action: 'onBack' },
		className: { control: 'text' },
	},
	args: {
		status: 'DEFAULT',
		className: 'w-[520px]',
	},
	tags: ['autodocs'],
};
