import type { Meta, StoryObj } from '@storybook/react';
import { Features } from '../../../../pages/LandingPage/sections/Features';
import { FeatureSecureIcon } from '../../../../components/Core/icons/FeatureSecure';
import { FeatureAIPotentialIcon } from '../../../../components/Core/icons/FeatureAIPotential';
import { FeatureDeFiIcon } from '../../../../components/Core/icons/FeatureDeFi';

const meta = {
	title: 'Pages/LandingPage/Sections/Features',
	component: Features,
	parameters: {
		layout: 'fullscreen',
	},
} satisfies Meta<typeof Features>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		items: { control: 'object' },
	},
	args: {
		items: [
			{
				icon: <FeatureSecureIcon />,
				title: 'Faster, Safer',
				description: 'Transactions settle in secs, not days, in a decentralized database.',
			},
			{
				icon: <FeatureAIPotentialIcon />,
				title: 'AI Potential',
				description:
					'AI to reveal the true potential of domains you own, from description to designs.',
			},
			{
				icon: <FeatureDeFiIcon />,
				title: 'DeFi Ready',
				description:
					'Your domain as collateral, integrated to DeFi protocols, trading at NFT marketplaces.',
			},
		],
	},
};
