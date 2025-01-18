import type { Meta, StoryObj } from '@storybook/react';
import { Button as Component } from '@namefi/ui';
import { ButtonText } from '@namefi/ui';

const meta = {
	title: 'Core/Buttons/BaseButton',
	component: Component,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		onClick: () => {},
		backgroundColor: '#111',
		borderColor: '#fff',
		content: 'Button',
	},
	render: ({ content }) => {
		return (
			<Component>
				<ButtonText>{content}</ButtonText>
			</Component>
		);
	},
};
