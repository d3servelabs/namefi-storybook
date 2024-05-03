import type { Meta, StoryObj } from '@storybook/react';
import { Assets } from '../../../../pages/LandingPage/sections/Assets';
import NFTAssetPreview from '../../../../assets/previews/NFTAsset.svg'
import NFSCAssetPreview from '../../../../assets/previews/NFSCAsset.svg'
import { NamefiBrandText } from '../../../../components/Core/NamefiBrandText';

const meta = {
	title: 'Pages/LandingPage/Sections/Assets',
	component: Assets,
	parameters: {
		layout: 'fullscreen',
	},
} satisfies Meta<typeof Assets>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		items: { control: 'object' },
		className: { control: 'text' },
	},
	args: {
		items: [
			{
				preview: (
					<img src={NFTAssetPreview} />
				),
				title: (
					<span>
						<NamefiBrandText className="text-[1em] font-bold">Namefi</NamefiBrandText> NFT
					</span>
				),
				description: (
					<div>
						<p>
							Namefi NFT is a crypto asset issued to represent your DNS ownership on{' '}
							the blockchain.
						</p>
						<br />
						<p>
							Your NFT is{' '}
							<span className="text-brand-blue">minted when you import</span> and{' '}
							<span className="text-brand-blue">burned when you export</span> your DNS{' '}
							domain with us.
						</p>
					</div>
				),
			},
			{
				preview: (
					<img src={NFSCAssetPreview} />
				),
				title: '$NFSC',
				description: (
					<div>
						<p>
							$NFSC is a{' '}
							<span className="text-brand-blue">
								service credit issued by <NamefiBrandText className="text-[1em]">Namefi</NamefiBrandText>{' '}
							</span>
							for you to purchase DNS domains. You can burn $USDC or $ETH to mint{' '}
							$NFSC.
						</p>
						<br />
						<p>
							$NFSC is currently <span className="text-brand-blue">non-tradable</span>{' '}
							and <span>non-transferrable</span>.
						</p>
					</div>
				),
			},
		],
		className: 'w-full p-12',
	},
};
