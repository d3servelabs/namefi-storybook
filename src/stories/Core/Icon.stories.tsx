import type { Meta, StoryObj } from '@storybook/react';
import { Icon, ICON_NAMES } from '../../components/Core/Icon';

const meta = {
	title: 'Core/Icon',
	component: Icon,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		icon: { control: 'select', options: ICON_NAMES },
		className: { control: 'text' },
	},
	args: {
		icon: 'Home',
		className: 'text-5xl text-primary-500',
	},
	tags: ['autodocs'],
};

export const AllIcons: Story = {
	argTypes: {
		className: { control: 'text' },
	} as any,
	args: {
		className: 'text-sm text-white',
	} as any,
	render: ({ className }: any) => {
		return (
			<div className={'grid grid-cols-6 gap-12 ' + className}>
				{ICON_NAMES.map((name) => (
					<div key={name} className="flex flex-col justify-center items-center gap-2">
						<Icon icon={name} className="text-[2em]" />
						<div>{name}</div>
					</div>
				))}
			</div>
		);
	},
};
