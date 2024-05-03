import type { Meta, StoryObj } from '@storybook/react';
import { AsterismIcon } from '../../../components/Core/icons/Asterism';
import { LandingPage as FullPageComponent } from '../../../pages/LandingPage/LandingPage';
import '../../../index.css';
import '../../../App.css';
import { NamefiBrandText } from '../../../components/Core/NamefiBrandText';
import { TwitterIcon } from '../../../components/Core/icons/Twitter';
import { DiscordIcon } from '../../../components/Core/icons/Discord';
import { TelegramIcon } from '../../../components/Core/icons/Telegram';
import { LinkedInIcon } from '../../../components/Core/icons/LinkedIn';
import { GitHubIcon } from '../../../components/Core/icons/GitHub';
import { FeatureSecureIcon } from '../../../components/Core/icons/FeatureSecure';
import { FeatureAIPotentialIcon } from '../../../components/Core/icons/FeatureAIPotential';
import { FeatureDeFiIcon } from '../../../components/Core/icons/FeatureDeFi';
import OpenSeaMonoLogo from '../../../assets/supporting/OpenSea-Mono.svg';
import LooksrareMonoLogo from '../../../assets/supporting/Looksrare-Mono.svg';
import ENSMonoLogo from '../../../assets/supporting/ENS-Mono.svg';
import NFTFiMonoLogo from '../../../assets/supporting/NFTFi-Mono.svg';
import TellerMonoLogo from '../../../assets/supporting/Teller-Mono.svg';
import NFTAssetPreview from '../../../assets/previews/NFTAsset.svg';
import NFSCAssetPreview from '../../../assets/previews/NFSCAsset.svg';

const meta = {
	title: 'Pages/Landingpage',
	component: FullPageComponent,
	parameters: {
		layout: 'fullscreen',
	},
} satisfies Meta<typeof FullPageComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullPage: Story = {
	args: {
		navLinks: [
			{ title: 'Feature', href: '#feature' },
			{ title: 'NFT & $NFSC', href: '#assets' },
			{ title: 'FAQs', href: '#faq' },
			{ title: 'About us', href: '#about' },
			{ title: 'Contact us', href: '#contact' },
		],
		socialLinks: [
			{ icon: <TwitterIcon />, href: '#' },
			{ icon: <DiscordIcon />, href: '#' },
			{ icon: <TelegramIcon />, href: '#' },
			{ icon: <LinkedInIcon />, href: '#' },
			{ icon: <GitHubIcon />, href: '#' },
		],
		hero: (
			<>
				<div className="block md:hidden">
					<div className="mb-3">
						<p className="mb-3">
							Trading <span className="font-normal italic">any domains</span>
						</p>
						<p className="mb-3">
							on-chain <AsterismIcon className="text-[#FEF55680] stroke-[0.01]" />,
						</p>
					</div>
					<div className="text-primary text-sm font-light">
						100x more liquid, get paid in secs.
					</div>
				</div>
				<div className="hidden md:block">Trading domains on chain.</div>
			</>
		),
		features: [
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
		supportings: [
			{ name: 'OpenSea', logo: OpenSeaMonoLogo },
			{ name: 'Looksrare', logo: LooksrareMonoLogo },
			{ name: 'ENS', logo: ENSMonoLogo },
			{ name: 'NFTFi', logo: NFTFiMonoLogo },
			{ name: 'Teller', logo: TellerMonoLogo },
		],
		assets: [
			{
				preview: <img src={NFTAssetPreview} />,
				title: (
					<span>
						<NamefiBrandText className="text-[1em] font-bold">Namefi</NamefiBrandText>{' '}
						NFT
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
				preview: <img src={NFSCAssetPreview} />,
				title: '$NFSC',
				description: (
					<div>
						<p>
							$NFSC is a{' '}
							<span className="text-brand-blue">
								service credit issued by{' '}
								<NamefiBrandText className="text-[1em]">Namefi</NamefiBrandText>{' '}
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
		faqComponentProps: {
			faqContent: [
				{
					question: 'What is Namefi??',
					answer: [
						`Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, corporis aliquid aperiam, 
                    fuga inventore id cumque, 
                    ab quo quasi similique numquam in sit ipsam voluptatem consequatur tempore eligendi ex ullam?`,
						`ab quo quasi similique numquam in sit ipsam voluptatem consequatur tempore eligendi ex ullam?`,
						`ab quo quasi similique numquam in sit ipsam voluptatem consequatur tempore eligendi ex ullam?`,
						`ab quo quasi similique numquam in sit ipsam voluptatem consequatur tempore eligendi ex ullam?`,
					],
				},
				{
					question: 'How does Namefi work?',
					answer: [
						`Namefi is a web3 platform that lives on multi-chain supporting DNS domains on chain. 
                    With Namefi, you could manage your domains as an NFT asset, which means you can transfer,
                    list for sell, and integrate it with all the DeFi protocols.`,
						`Besides, Namefi also aims to provide superb domain management
                    features such as AutoPark™, AutoENS™, DNS Records, Nameservers and URL forwarding.`,
					],
				},
				{
					question: 'What is $NFSC?',
					answer: [
						`Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, corporis aliquid aperiam, 
                    fuga inventore id cumque, 
                    ab quo quasi similique numquam in sit ipsam voluptatem consequatur tempore eligendi ex ullam?`,
						`ab quo quasi similique numquam in sit ipsam voluptatem consequatur tempore eligendi ex ullam?`,
					],
				},
				{
					question: 'What is AutoPark™?',
					answer: [
						`Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, corporis aliquid aperiam, 
                    fuga inventore id cumque, 
                    ab quo quasi similique numquam in sit ipsam voluptatem consequatur tempore eligendi ex ullam?`,
						`ab quo quasi similique numquam in sit ipsam voluptatem consequatur tempore eligendi ex ullam?`,
					],
				},
				{
					question: 'What is AutoENS™?',
					answer: [
						`Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, corporis aliquid aperiam, 
                    fuga inventore id cumque, 
                    ab quo quasi similique numquam in sit ipsam voluptatem consequatur tempore eligendi ex ullam?`,
						`ab quo quasi similique numquam in sit ipsam voluptatem consequatur tempore eligendi ex ullam?`,
						`ab quo quasi similique numquam in sit ipsam voluptatem consequatur tempore eligendi ex ullam?`,
					],
				},
			],
		} as any,
	},
};
