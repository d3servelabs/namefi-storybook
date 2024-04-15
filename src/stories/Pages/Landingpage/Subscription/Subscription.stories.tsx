import type { Meta, StoryObj } from '@storybook/react';
import { Subscription as SubscriptionComponent } from '../../../../pages/Landingpage/Subscription';
const meta = {
	title: 'Pages/Landingpage/Subscription',
	component: SubscriptionComponent,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof SubscriptionComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Subscription: Story = {};
