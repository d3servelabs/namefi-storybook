import type { Meta, StoryObj } from '@storybook/react';
import { Demo } from '../../../components/Templates/RegistrationFlow/Cart/Demo';


const meta: Meta<typeof Demo> = {
	title: 'Templates/DomainRegistration/Cart',
	component: Demo,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const CartStory: Story = {
	args: {
		checkedOut: false,
		isConnectWallet: false,
		isConnectWalletError: false,
		years: 3,
		price:20,
		domainName: 'example.com',
	},
};
