import type { Meta, StoryObj } from '@storybook/react';
import { SubscriptionFooter as SubscriptionFooterComponent } from '../../../../../pages/LandingPage/components/Subscription';
const meta = {
	title: 'Pages/LandingPage/Components/Subscription',
	component: SubscriptionFooterComponent,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof SubscriptionFooterComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SubscriptionFooter: Story = {};
