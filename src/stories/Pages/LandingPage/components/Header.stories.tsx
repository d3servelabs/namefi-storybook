import type { Meta, StoryObj } from '@storybook/react';
import { Header as HeaderComponent } from '../../../../pages/LandingPage/components/Header';
import '../../../../index.css';
import '../../../../App.css';

const meta: Meta<typeof HeaderComponent> = {
	title: 'Pages/LandingPage/Components',
	component: HeaderComponent,
	parameters: {
		layout: 'fullscreen',
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Header: Story = {};
