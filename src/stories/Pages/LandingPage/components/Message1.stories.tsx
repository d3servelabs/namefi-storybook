import type { Meta, StoryObj } from '@storybook/react';
import { Message1 as MessageComponent } from '../../../../pages/LandingPage/components/AssetsMessage';
import '../../../../index.css';
import '../../../../App.css';

const meta = {
	title: 'Pages/LandingPage/Components',
	component: MessageComponent,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof MessageComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Message: Story = {};
