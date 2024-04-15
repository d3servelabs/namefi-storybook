import type { Meta, StoryObj } from '@storybook/react';
import { SolidButton as SolidButtonComponent } from '../../../../../pages/LandingPage/components/SolidButton';
const meta = {
	title: 'Pages/LandingPage/Components/Button',
	component: SolidButtonComponent,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof SolidButtonComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SolidButton: Story = {};
