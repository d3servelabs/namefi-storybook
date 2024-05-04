import type { Meta, StoryObj } from '@storybook/react';
import AlchemyLogo from '../../../../assets/LandingPage/backed-by/Alchemy-Poly.png';
import MaskLogo from '../../../../assets/LandingPage/backed-by/Mask-Poly.png';
import FoothillLogo from '../../../../assets/LandingPage/backed-by/Foothill-Poly.png';
import OrangedaoLogo from '../../../../assets/LandingPage/backed-by/OrangeDAO-Poly.png';
import { BackedBy } from '../../../../pages/LandingPage/sections/BackedBy';

const meta = {
	title: 'Pages/LandingPage/Sections/BackedBy',
	component: BackedBy,
	parameters: {
		layout: 'fullscreen',
	},
} satisfies Meta<typeof BackedBy>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		items: { control: { type: 'object' } },
	},
	args: {
		items: [
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
	},
};
