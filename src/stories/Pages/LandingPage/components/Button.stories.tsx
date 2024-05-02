import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ArrowRight } from 'lucide-react';
import { Button } from '../../../../pages/LandingPage/components/Button';

const meta = {
	title: 'Pages/LandingPage/Components/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		children: { control: 'text' },
		type: { control: { type: 'select', options: ['primary', 'outlined', 'tonal'] } },
		htmlType: { control: { type: 'select', options: ['button', 'submit', 'reset'] } },
		disabled: { control: 'boolean' },
		onClick: { action: 'onClick' },
		className: { control: 'text' },
	},
	args: {
		children: 'Button',
		type: 'outlined',
		htmlType: 'button',
		disabled: false,
		className: '',
	},
};

export const PrimaryButtonWithArrowTransition: Story = {
	argTypes: {},
	args: {} as any,
	render: () => {
		return (
			<Button
				type="primary"
				className="max-w-full w-100 h-14 px-8 text-lg font-third tracking-widest group"
				onClick={action('onClick')}>
				<span>Join Waitlist</span>
				<ArrowRight className="transition w-4.5 h-4.5 text-primary-500 group-hover:translate-x-2" />
			</Button>
		);
	},
};

export const TonalButtonWithArrow: Story = {
	argTypes: {},
	args: {} as any,
	render: () => {
		return (
			<Button type="tonal" className="h-14 px-8" onClick={action('onClick')}>
				<span>I'm an Investor</span>
				<ArrowRight className="w-4.5 h-4.5" />
			</Button>
		);
	},
};

export const TonalButton: Story = {
	argTypes: {},
	args: {} as any,
	render: () => {
		return (
			<Button type="tonal" onClick={action('onClick')}>
				Yes
			</Button>
		);
	},
};

export const OutlinedButtonWithArrow: Story = {
	argTypes: {},
	args: {} as any,
	render: () => {
		return (
			<Button type="outlined" onClick={action('onClick')}>
				<span>No, ask a Human</span>
				<ArrowRight className="w-4.5 h-4.5 text-primary-500" />
			</Button>
		);
	},
};
