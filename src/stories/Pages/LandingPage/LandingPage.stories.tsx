import { useState, useCallback } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { AsterismIcon } from '../../../components/Core/icons/Asterism';
import { LandingPage } from '../../../pages/LandingPage/LandingPage';
import { type SubscriptionInlineFormPayload } from '../../../pages/LandingPage/components/Subscription';
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
import RegistrationScreenshot from '../../../assets/LandingPage/introduction/screenshot-registration.png';
import ManagementScreenshot from '../../../assets/LandingPage/introduction/screenshot-management.png';
import EthereumLogo from '../../../assets/LandingPage/powered-by/ethereum.png';
import SigninWithEthereumLogo from '../../../assets/LandingPage/powered-by/signin-with-ethereum.png';
import GoogleCloudLogo from '../../../assets/LandingPage/powered-by/google-cloud.png';
import AWSLogo from '../../../assets/LandingPage/powered-by/aws.png';
import OpenSeaMonoLogo from '../../../assets/LandingPage/supporting/OpenSea-Mono.svg';
import LooksrareMonoLogo from '../../../assets/LandingPage/supporting/Looksrare-Mono.svg';
import ENSMonoLogo from '../../../assets/LandingPage/supporting/ENS-Mono.svg';
import NFTFiMonoLogo from '../../../assets/LandingPage/supporting/NFTFi-Mono.svg';
import TellerMonoLogo from '../../../assets/LandingPage/supporting/Teller-Mono.svg';
import NFTAssetPreview from '../../../assets/LandingPage/previews/NFTAsset.svg';
import NFSCAssetPreview from '../../../assets/LandingPage/previews/NFSCAsset.svg';
import AlchemyLogo from '../../../assets/LandingPage/backed-by/alchemy.svg';
import MaskLogo from '../../../assets/LandingPage/backed-by/mask.svg';
import FoothillLogo from '../../../assets/LandingPage/backed-by/foothill.svg';
import OrangedaoLogo from '../../../assets/LandingPage/backed-by/orangedao.svg';

const meta = {
	title: 'Pages/Landingpage',
	component: LandingPage,
	parameters: {
		layout: 'fullscreen',
	},
} satisfies Meta<typeof LandingPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullPage: Story = {
	argTypes: {
		socialLinks: { control: 'object' },
		headerNavLinks: { control: 'object' },
		onClickLaunchDApp: { action: 'onClickLaunchDApp' },
		heroText: { control: 'object' },
		onClickJoinBetaTest: { action: 'onClickJoinBetaTest' },
		onClickInvestor: { action: 'onClickInvestor' },
		introductionTitle: { control: 'object' },
		introductionSubtitle: { control: 'object' },
		introductionDescription: { control: 'object' },
		introductionStatistics: { control: 'object' },
		introductionFlows: { control: 'object' },
		poweredByItems: { control: 'object' },
		features: { control: 'object' },
		supportings: { control: 'object' },
		assets: { control: 'object' },
		backers: { control: 'object' },
		faqs: { control: 'object' },
		onClickAskHuman: { action: 'onClickAskHuman' },
		footerNavLinks: { control: 'object' },
	},
	args: {
		headerNavLinks: [
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
		heroText: (
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
		introductionTitle: 'Secure your DNS ownership',
		introductionSubtitle: (
			<>
				<i className="font-extralight">on the blockchain</i>{' '}
				<strong>
					with <NamefiBrandText className="text-[1em]">Namefi</NamefiBrandText> NFTs.
				</strong>
			</>
		),
		introductionDescription: (
			<>
				Minted upon import and burned upon export, your domain's NFT ensuresverified and
				visible ownership.
			</>
		),
		introductionStatistics: [
			{
				value: 329,
				// NOTE: In the future, please consider embedding stylesheets likes `strong { font-weight: 500, color: white; }` in components to avoid duplicating style codes in props.
				label: (
					<>
						<span className="text-white font-medium">TLDs</span> Supported
					</>
				),
			},
			{
				value: 574,
				label: (
					<>
						<NamefiBrandText className="text-white text-[1em]">Namefi</NamefiBrandText>{' '}
						<span className="text-white font-medium">NFTs</span> Minted
					</>
				),
			},
		],
		introductionFlows: [
			{ thumbnail: RegistrationScreenshot, label: 'Easy Registration - dApp v1.0' },
			{ thumbnail: ManagementScreenshot, label: 'Manage everything - dApp v1.0' },
		],
		poweredByItems: [
			{ logo: EthereumLogo, name: 'ethereum' },
			{ logo: SigninWithEthereumLogo, name: 'sign in with ethereum' },
			{ logo: GoogleCloudLogo, name: 'google cloud' },
			{ logo: AWSLogo, name: 'aws' },
		],
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
		backers: [
			{
				name: 'Alchemy',
				logo: AlchemyLogo,
			},
			{
				name: 'Mask',
				logo: MaskLogo,
			},
			{
				name: 'Foothill',
				logo: FoothillLogo,
			},
			{
				name: 'Orangedao',
				logo: OrangedaoLogo,
			},
		],
		faqs: [
			{
				question: 'What is Namefi??',
				answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			},
			{
				question: 'How does Namefi work?',
				answer: (
					<>
						<p>
							Namefi is a web3 platform that lives on multi-chain supporting DNS
							domains on chain. With Namefi, you could manage your domains as an NFT
							asset, which means you can transfer, list for sell, and integrate it
							with all the DeFi protocols.
						</p>
						<p>
							Besides, Namefi also aims to provide superb domain management features
							such as AutoPark™, AutoENS™, DNS Records, Nameservers and URL
							forwarding.
						</p>
					</>
				),
			},
			{
				question: 'What is $NFSC?',
				answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			},
			{
				question: 'What is AutoPark™?',
				answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			},
			{
				question: 'What is AutoENS™?',
				answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
			},
		],
		footerNavLinks: [
			{ title: 'About us', href: '#' },
			{ title: 'Career', href: '#' },
			{ title: 'Contact us', href: '#' },
			{ title: 'Terms and conditions', href: '#' },
		],
	},
	render: (props) => {
		const [isHeroSubscriptionLoading, setIsHeroSubscriptionLoading] = useState(false);
		const [isHeroSubscriptionSubmitted, setIsHeroSubscriptionSubmitted] = useState(false);
		const [isFooterSubscriptionLoading, setIsFooterSubscriptionLoading] = useState(false);
		const [isFooterSubscriptionSubmitted, setIsFooterSubscriptionSubmitted] = useState(false);
		const subscribeFromHero = useCallback(
			async (payload: SubscriptionInlineFormPayload) => {
				setIsHeroSubscriptionLoading(true);
				action('onSubscribeFromHero')(payload);
				await new Promise((resolve) => setTimeout(resolve, 2000));
				setIsHeroSubscriptionSubmitted(true);
				setIsHeroSubscriptionLoading(false);
			},
			[setIsHeroSubscriptionLoading, setIsHeroSubscriptionSubmitted],
		);
		const subscribeFromFooter = useCallback(
			async (payload: SubscriptionInlineFormPayload) => {
				setIsFooterSubscriptionLoading(true);
				action('onSubscribeFromFooter')(payload);
				await new Promise((resolve) => setTimeout(resolve, 2000));
				setIsFooterSubscriptionSubmitted(true);
				setIsFooterSubscriptionLoading(false);
			},
			[setIsFooterSubscriptionLoading, setIsFooterSubscriptionSubmitted],
		);
		return (
			<LandingPage
				{...props}
				heroSubscriptionLoading={isHeroSubscriptionLoading}
				heroSubscriptionSubmiited={isHeroSubscriptionSubmitted}
				onHeroSubscriptionSubmit={subscribeFromHero}
				footerSubscriptionLoading={isFooterSubscriptionLoading}
				footerSubscriptionSubmiited={isFooterSubscriptionSubmitted}
				onFooterSubscriptionSubmit={subscribeFromFooter}
			/>
		);
	},
};
