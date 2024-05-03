import type { Meta, StoryObj } from '@storybook/react';
// TODO: update optimize logo files
import AlchemyLogo from '../../../../assets/LandingPage/backed-by/alchemy.svg';
import MaskLogo from '../../../../assets/LandingPage/backed-by/mask.svg';
import FoothillLogo from '../../../../assets/LandingPage/backed-by/foothill.svg';
import OrangedaoLogo from '../../../../assets/LandingPage/backed-by/orangedao.svg';
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
