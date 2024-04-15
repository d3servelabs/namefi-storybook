import type { Meta, StoryObj } from '@storybook/react';
import { Card1 as DomainCardComponent } from '../../../../pages/LandingPage/components/DomainCard';
import '../../../../index.css';
import '../../../../App.css';

const meta = {
	title: 'Pages/LandingPage/Components',
	component: DomainCardComponent,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof DomainCardComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Card1: Story = {};
