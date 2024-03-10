import type { Meta, StoryObj } from '@storybook/react';
import '../../../index.css';
import '../../../App.css';
import { MakeOffer } from '../../../components/Templates/ParkingMode';

const meta = {
	title: 'Pages/ParkingMode/Components/MakeOffer',
	component: MakeOffer,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof MakeOffer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		exchangeRate: { control: 'number' },
		maximumPrice: { control: 'number' },
		unit: { control: 'text' },
		domainStatus: { control: 'radio', options: ['for-bid', 'for-sale'] },
		priceTip: { control: 'text' },
		onBuy: { action: 'onBuy' },
		onOffer: { action: 'onOffer' },
	},
	args: {
		exchangeRate: 1,
		maximumPrice: 99999999,
		unit: '$NFSC',
		domainStatus: 'for-sale',
		priceTip: 'Lorem ipsum dolor sit amet',
	},
	tags: ['autodocs'],
};
