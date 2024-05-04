import type { Meta, StoryObj } from '@storybook/react';
import { NamefiBrandText } from '../../../../components/Core/NamefiBrandText';
import { Introduction } from '../../../../pages/LandingPage/sections/Introduction';
import RegistrationScreenshot from '../../../../assets/LandingPage/introduction/screenshot-registration.png';
import ManagementScreenshot from '../../../../assets/LandingPage/introduction/screenshot-management.png';

const meta = {
	title: 'Pages/LandingPage/Sections/Introduction',
	component: Introduction,
	parameters: {
		layout: 'fullscreen',
	},
} satisfies Meta<typeof Introduction>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		title: { control: { type: 'text' } },
		subtitle: { control: { type: 'object' } },
		description: { control: { type: 'object' } },
		statistics: { control: { type: 'object' } },
		flows: { control: { type: 'object' } },
		className: { control: { type: 'text' } },
	},
	args: {
		title: 'Secure your DNS ownership',
		subtitle: (
			<>
				<i className="font-extralight">on the blockchain</i>{' '}
				<strong>
					with <NamefiBrandText className="text-[1em]">Namefi</NamefiBrandText> NFTs.
				</strong>
			</>
		),
		description: (
			<>
				Minted upon import and burned upon export, your domain's NFT ensuresverified and
				visible ownership.
			</>
		),
		statistics: [
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
		flows: [
			{ thumbnail: RegistrationScreenshot, label: 'Easy Registration - dApp v1.0' },
			{ thumbnail: ManagementScreenshot, label: 'Manage everything - dApp v1.0' },
		],
		className: '',
	},
};
