import type { Meta, StoryObj } from '@storybook/react';
import { PoweredBy } from '../../../../pages/LandingPage/sections/PoweredBy';
import EthereumLogo from '../../../../assets/LandingPage/powered-by/ethereum.png';
import SigninWithEthereumLogo from '../../../../assets/LandingPage/powered-by/signin-with-ethereum.png';
import GoogleCloudLogo from '../../../../assets/LandingPage/powered-by/google-cloud.png';
import AWSLogo from '../../../../assets/LandingPage/powered-by/aws.png';

const meta = {
	title: 'Pages/LandingPage/Sections/PoweredBy',
	component: PoweredBy,
	parameters: {
		layout: 'fullscreen',
	},
} satisfies Meta<typeof PoweredBy>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		items: { control: { type: 'object' } },
		className: { control: { type: 'text' } },
	},
	args: {
		items: [
			{ logo: EthereumLogo, name: 'ethereum' },
			{ logo: SigninWithEthereumLogo, name: 'sign in with ethereum' },
			{ logo: GoogleCloudLogo, name: 'google cloud' },
			{ logo: AWSLogo, name: 'aws' },
		],
		className: '',
	},
};
