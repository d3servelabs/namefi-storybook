import type { Meta, StoryObj } from '@storybook/react';
import { SubscriptionFooter as SubscriptionFooterComponent } from '../../../../pages/Landingpage/Subscription';
const meta = {
  title: 'Pages/Landingpage/Subscription',
  component: SubscriptionFooterComponent,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
} satisfies Meta<typeof SubscriptionFooterComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SubscriptionFooter: Story = {}