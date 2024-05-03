import type { Meta, StoryObj } from '@storybook/react';
import { FeatureSecureIcon } from '../../../../components/Core/icons/FeatureSecure';
import { FeatureCard } from '../../../../pages/LandingPage/components/FeatureCard';

const meta = {
	title: 'Pages/LandingPage/Components/FeatureCard',
	component: FeatureCard,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof FeatureCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  argTypes: {
    icon: { control: 'object' },
    title: { control: 'text' },
    description: { control: 'text' },
    className: { control: 'text' },
  },
  args: {
    icon: <FeatureSecureIcon />,
    title: 'FASTER',
    description: 'Transactions settle in secs, not days, in a decentralized database.',
    className: '',
  },
};
