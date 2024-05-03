import type { Meta, StoryObj } from '@storybook/react';
import { NFTAssetPreview } from '../../../../../pages/LandingPage/components/AssetPreviews/NFTAssetPreview';

const meta = {
	title: 'Pages/LandingPage/Components/AssetPreviews/NFTAssetPreview',
	component: NFTAssetPreview,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof NFTAssetPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		status: { control: 'text' },
		domain: { control: 'text' },
		owner: { control: 'text' },
		expiry: { control: 'text' },
	},
	args: {
		status: 'Taken',
		domain: 'Vitalik.eth',
		owner: '0x3923...d9s3',
		expiry: 'Mar 01 2025',
	},
};
