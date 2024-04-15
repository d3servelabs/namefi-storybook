import type { Meta, StoryObj } from '@storybook/react';
import * as FeaturedCardComponent from '../../../../pages/LandingPage/components/FeaturedCard';
import '../../../../index.css';
import '../../../../App.css';
import { SaferIcon } from '../../../../pages/LandingPage/components/icons/SaferIcon';
import { FasterIcon } from '../../../../pages/LandingPage/components/icons/FasterIcon';
import { DefiIcon } from '../../../../pages/LandingPage/components/icons/DefiIcon';
import LandingFaster from '../../../../components/Core/icons/LandingFaster';
import LandingSafer from '../../../../components/Core/icons/LandingSafer';
import LandingDefi from '../../../../components/Core/icons/LandingDefi';

const meta = {
	title: 'Pages/LandingPage/Components',
	component: FeaturedCardComponent.Grid,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<FeaturedCardComponent.FeaturedCardGridProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FeaturedCard: Story = {
	args: {
		cardContent: [
			{
				label: 'FASTER',
				text: [
					'transact in secs, not weeks',
					'sellers get paid faster',
					'buyers get domains faster',
				],
				img: <FasterIcon className={''} />,
			},
			{
				label: 'SAFER',
				text: ['safer than Auth-code', 'safer than centralized database'],
				img: <SaferIcon className="" />,
			},
			{
				label: 'Defi',
				text: [
					'domains as collateral',
					'NFT marketplaces integration',
					'DeFi protocols integration',
				],
				img: <DefiIcon className="" />,
			},
		],
	} as any,
	render() {
		return (
			<>
				<FeaturedCardComponent.Grid>
					<FeaturedCardComponent.Item label={'Faster'} img={<LandingFaster />}>
						<li>transact in secs, not weeks</li>
						<li>sellers get paid faster</li>
						<li>buyers get domains faster</li>
					</FeaturedCardComponent.Item>
					<FeaturedCardComponent.Item label={'Safer'} img={<LandingSafer />}>
						<li>safer than Auth-code</li>
						<li>safer than centralized database</li>
					</FeaturedCardComponent.Item>
					<FeaturedCardComponent.Item label={'Defi'} img={<LandingDefi />}>
						<li>domains as collateral</li>
						<li>NFT marketplaces integration</li>
						<li>DeFi protocols integration</li>
					</FeaturedCardComponent.Item>
				</FeaturedCardComponent.Grid>
			</>
		);
	},
};
