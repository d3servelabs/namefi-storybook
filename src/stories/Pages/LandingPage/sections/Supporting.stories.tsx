import type { Meta, StoryObj } from '@storybook/react';
import { Supporting } from '../../../../pages/LandingPage/sections/Supporting';
import OpenSeaMonoLogo from '../../../../assets/LandingPage/supporting/OpenSea-Mono.svg';
import LooksrareMonoLogo from '../../../../assets/LandingPage/supporting/Looksrare-Mono.svg';
import ENSMonoLogo from '../../../../assets/LandingPage/supporting/ENS-Mono.svg';
import NFTFiMonoLogo from '../../../../assets/LandingPage/supporting/NFTFi-Mono.svg';
import TellerMonoLogo from '../../../../assets/LandingPage/supporting/Teller-Mono.svg';

const meta = {
	title: 'Pages/LandingPage/Sections/Supporting',
	component: Supporting,
	parameters: {
		layout: 'fullscreen',
	},
} satisfies Meta<typeof Supporting>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		items: { control: 'object' },
		className: { control: 'text' },
	},
	args: {
		items: [
			{ name: 'OpenSea', logo: OpenSeaMonoLogo },
			{ name: 'Looksrare', logo: LooksrareMonoLogo },
			{ name: 'ENS', logo: ENSMonoLogo },
			{ name: 'NFTFi', logo: NFTFiMonoLogo },
			{ name: 'Teller', logo: TellerMonoLogo },
		],
		className: '',
	},
};
