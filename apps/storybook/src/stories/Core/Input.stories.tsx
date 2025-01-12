import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@namefi/ui';

const meta = {
	title: 'Core/Input',
	component: Input,
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;
export const InputStory: Story = {
	args: {},
};
