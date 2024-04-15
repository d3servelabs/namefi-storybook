import type { Meta, StoryObj } from '@storybook/react';
import { BaseButton as BaseButtonComponent } from '../../../../../pages/LandingPage/components/SolidButton';
const meta = {
	title: 'Pages/LandingPage/Components/Button',
	component: BaseButtonComponent,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof BaseButtonComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseButton: Story = {
	args: {
		children: 'BUtton',
	},
};
