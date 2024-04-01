import type { Meta, StoryObj } from '@storybook/react';
import { DNSSettingsTabs  } from '../../../../components/Templates/DNSSettings';

const meta = {
	title: 'Components/DNSSettings/DNSSettingsTabs',
	component: DNSSettingsTabs,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof DNSSettingsTabs>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
	argTypes: {
		value: { contact: { control: 'radio', options: ['records', 'forward', 'ns'] } },
		onChange: { action: 'onChange' },
		onSave: { action: 'onSave' },
		className: { control: 'text' },
	},
	args: {
		value: 'records',
	},
};
