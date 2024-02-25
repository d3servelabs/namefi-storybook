import type { Meta, StoryObj } from '@storybook/react';
import {
	DNSSettingsCard,
} from '@components/DNSSettings';

const meta = {
	title: 'Components/DNSSettings/DNSSettingsCard',
	component: DNSSettingsCard,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof DNSSettingsCard>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
	argTypes: {
		onBack: { action: 'onBack' },
		onSave: { action: 'onSave' },
	} as any,
	args: {
	} as any,
	render: ({ onBack, onSave }: any) => {
		return (
			<DNSSettingsCard onBack={onBack} onSave={onSave} />
		);
	},
};
