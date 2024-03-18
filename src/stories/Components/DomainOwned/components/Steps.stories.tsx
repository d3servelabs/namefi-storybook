import type { Meta, StoryObj } from '@storybook/react';
import { StepButton } from '../../../../components/DomainOwned/components/StepButton';
import { Steps } from '../../../../components/DomainOwned/components/Steps';
import { UnlockIcon } from '../../../../components/Core/icons/Unlock';
import { ReverseLeftIcon } from '../../../../components/Core/icons/ReverseLeft';
import { DoneIcon } from '../../../../components/Core/icons/Done';

const meta = {
	title: 'Components/DomainOwned/Components/Steps',
	component: Steps,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof Steps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		current: { control: 'number' },
		items: { control: 'object' },
		className: { control: 'text' },
	},
	args: {
		current: 0,
		items: [
			<StepButton icon={<UnlockIcon />}>Unlock</StepButton>,
			<StepButton icon={<ReverseLeftIcon />} disabled>
				Transfer
			</StepButton>,
			<StepButton icon={<DoneIcon />} disabled>
				Done
			</StepButton>,
		],
		className: '',
	},
};
