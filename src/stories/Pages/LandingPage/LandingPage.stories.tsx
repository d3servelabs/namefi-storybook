import type { Meta, StoryObj } from '@storybook/react';
import { AsterismIcon } from '../../../components/Core/icons/Asterism';
import { LandingPage as FullPageComponent } from '../../../pages/LandingPage/LandingPage';
import '../../../index.css';
import '../../../App.css';
import { TwitterIcon } from '../../../components/Core/icons/Twitter';
import { DiscordIcon } from '../../../components/Core/icons/Discord';
import { TelegramIcon } from '../../../components/Core/icons/Telegram';
import { LinkedInIcon } from '../../../components/Core/icons/LinkedIn';
import { GitHubIcon } from '../../../components/Core/icons/GitHub';
import { FasterIcon } from '../../../pages/LandingPage/components/icons/FasterIcon';
import { SaferIcon } from '../../../pages/LandingPage/components/icons/SaferIcon';
import { DefiIcon } from '../../../pages/LandingPage/components/icons/DefiIcon';

const meta = {
	title: 'Pages/Landingpage',
	component: FullPageComponent,
	parameters: {
		layout: 'fullscreen',
	},
} satisfies Meta<typeof FullPageComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LandingPage: Story = {
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
					<div className="text-primary text-sm font-light">100x more liquid, get paid in secs.</div>
				</div>
				<div className="hidden md:block">Trading domains on chain.</div>
			</>
		),
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
		featuredCardProps: {
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
	},
};
