import type { Meta, StoryObj } from '@storybook/react';
import { GlobeIcon } from '@radix-ui/react-icons';
import { StepButton } from '../../../../components/Templates/DomainOwned/components/StepButton';
import { Steps } from '../../../../components/Templates/DomainOwned/components/Steps';
import { UnlockIcon } from '../../../../components/Core/icons/Unlock';
import { ReverseLeftIcon } from '../../../../components/Core/icons/ReverseLeft';
import { DoneIcon } from '../../../../components/Core/icons/Done';

const meta = {
	title: 'Templates/DomainOwned/Components/Steps',
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
		vertical: { control: 'boolean' },
		itemClassName: { control: 'text' },
		className: { control: 'text' },
	},
	args: {
		current: 0,
		items: [
			<StepButton key={0} icon={<UnlockIcon />}>
				Unlock
			</StepButton>,
			<StepButton key={1} icon={<ReverseLeftIcon />} disabled>
				Transfer
			</StepButton>,
			<StepButton key={2} icon={<DoneIcon />} disabled>
				Done
			</StepButton>,
		],
		pending: '',
		vertical: false,
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
		vertical: false,
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
				<div className="absolute text-[10px] font-medium leading-4 bottom-full">
					Your Registrar
				</div>
			</div>
		),
		vertical: false,
		itemClassName: 'w-38',
		className: '',
	},
};
