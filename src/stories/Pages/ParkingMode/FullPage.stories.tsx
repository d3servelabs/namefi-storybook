import type { Meta, StoryObj } from '@storybook/react';
import '../../../index.css';
import '../../../App.css';
import { ParkingMode, ParkingPagePreview } from '../../../components/Templates/ParkingMode';

const meta = {
	title: 'Pages/ParkingMode/FullPage',
	component: ParkingMode,
	parameters: {
		layout: 'fullscrenn',
	},
} satisfies Meta<typeof ParkingMode>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		domain: { control: 'text' },
		domainOwner: { control: 'text' },
		domainStatus: { control: 'radio', options: ['for-bid', 'for-sale'] },
		onClickOwner: { action: 'onClickOwner' },
		domainValue: { control: 'number' },
		domainValueDescription: { control: 'text' },
		domainValueTip: { control: 'text' },
		domainScore: { control: 'number' },
		domainScoreProvider: { control: 'text' },
		domainScoreTip: { control: 'text' },
		otherTLDs: { control: 'object' },
		onClickTLD: { action: 'onClickTLD' },
		onClickMakeOffer: { action: 'onClickMakeOffer' },
		domainPotentialDescription: { control: 'text' },
		domainPotentialPreview: { control: 'object' },
		onClickGeneratePotentialPreview: { action: 'onClickGeneratePotentialPreview' },
		headerTwitterLink: { control: 'text' },
		headerDiscordLink: { control: 'text' },
		userAuthStateProps: { control: 'object' },
		footerLinks: { control: 'object' },
	},
	args: {
		domain: 'example.com',
		domainOwner: '0x872742426c502131B5C13015DEaE0B1BEC895315',
		domainStatus: 'for-bid',
		domainValue: 20000,
		domainValueDescription: '≈$20,000.00',
		domainValueTip: '',
		domainScore: 87,
		domainScoreProvider: 'XXXXXX',
		domainScoreTip: '',
		otherTLDs: ['.namefi', '.eth', '.org', '.co', '.xyz', '.net'],
		domainPotentialDescription: `The name **"Namefi"** signifies the _act of naming something_, with the idea that it becomes just as _essential, connecting people_ and contributing to a better _future_ for the internet.`,
		domainPotentialPreview: <ParkingPagePreview domain="example.com" />,
		headerTwitterLink: 'https://twitter.com/Namefi_io',
		headerDiscordLink: 'https://discord.namefi.gg/',
		userAuthStateProps: {},
		footerLinks: [
			{ text: 'Contact Us', href: 'https://discord.namefi.gg' },
			{ text: 'Private Terms' },
			{ text: 'Terms & Conditions' },
		],
	},
	tags: ['autodocs'],
};
