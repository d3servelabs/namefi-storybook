import type { Meta, StoryObj } from '@storybook/react';
import { FAQs } from '../../../../pages/LandingPage/sections/FAQs';

const meta = {
	title: 'Pages/LandingPage/Sections/FAQs',
	component: FAQs,
	parameters: {
		layout: 'fullscreen',
	},
} satisfies Meta<typeof FAQs>;

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
		className: '',
	},
};
