import type { Meta, StoryObj } from '@storybook/react';
import { NFSCAssetPreview } from '../../../../../pages/LandingPage/components/AssetPreviews/NFSCAssetPreview';

const meta = {
	title: 'Pages/LandingPage/Components/AssetPreviews/NFSCAssetPreview',
	component: NFSCAssetPreview,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof NFSCAssetPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		owner: { control: 'text' },
		value: { control: 'number' },
		dollar: { control: 'number' },
		status: { control: 'text' },
	},
	args: {
		owner: '0x8312...9ds0',
		value: 987.12,
		dollar: 987.12,
		status: 'Non Transferrable',
	},
};
