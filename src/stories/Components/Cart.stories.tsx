import type { Meta, StoryObj } from '@storybook/react';
import { Cart } from '../../components/Cart';

const meta: Meta<typeof Cart> = {
	title: 'Components/Cart',
	component: Cart,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const CartStory: Story = {
	args: {
		cartItems: 2,
	},
};
