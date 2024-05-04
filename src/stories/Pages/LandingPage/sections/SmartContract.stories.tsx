import type { Meta, StoryObj } from '@storybook/react';
import { SmartContract } from '../../../../pages/LandingPage/sections/SmartContract';

const meta = {
	title: 'Pages/LandingPage/Sections/SmartContract',
	component: SmartContract,
	parameters: {
		layout: 'fullscreen',
	},
} satisfies Meta<typeof SmartContract>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		address: { control: { type: 'text' } },
		href: { control: { type: 'text' } },
		className: { control: { type: 'text' } },
	},
	args: {
    address: '0x0000000000cf80E7Cf8Fa4480907f692177f8e06',
    href: '#',
		className: '',
	},
};
