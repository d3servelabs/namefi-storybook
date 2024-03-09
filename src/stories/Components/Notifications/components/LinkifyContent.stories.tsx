import type { Meta, StoryObj } from '@storybook/react';
import { LinkifyContent } from '../../../../components/Templates/Notifications';

const meta = {
	title: 'Components/Notifications/Components/LinkifyContent',
	component: LinkifyContent,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof LinkifyContent>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
	argTypes: {
		content: { control: 'text' },
	},
	args: {
		content: 'Started minting example.com',
	},
};
