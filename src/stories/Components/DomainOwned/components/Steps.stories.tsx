import type { Meta, StoryObj } from '@storybook/react';
import { GlobeIcon } from '@radix-ui/react-icons';
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
		pending: { control: 'object' },
		itemClassName: { control: 'text' },
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
		pending: '',
		itemClassName: '',
		className: '',
	},
};

export const PlainText: Story = {
	argTypes: {
		current: { control: 'number' },
		items: { control: 'object' },
		itemClassName: { control: 'text' },
		className: { control: 'text' },
	},
	args: {
		current: 0,
		items: ['1', '2', '3'],
		pending: '',
		itemClassName: 'w-38',
		className: '',
	},
};

export const Pending: Story = {
	argTypes: {
		current: { control: 'number' },
		items: { control: 'object' },
		itemClassName: { control: 'text' },
		className: { control: 'text' },
	},
	args: {
		current: 0.5,
		items: ['1', '2', '3'],
		pending: (
			<div className="text-primary-500 relative p-1">
				<GlobeIcon className="w-5 h-5 bg-black-background" />
				<div className="absolute text-[10px] font-medium leading-4 bottom-full">Your Registrar</div>
			</div>
		),
		itemClassName: 'w-38',
		className: '',
	},
};
