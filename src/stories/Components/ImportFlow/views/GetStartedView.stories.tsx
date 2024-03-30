import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import '../../../../index.css';
import '../../../../App.css';
import { EthereumLogo } from '../../../../components/Core/icons/EthereumLogo';
import BaseNetworkIcon from '../../../../components/Core/icons/BaseNetwork';
import { GetStarted } from '../../../../components/ImportFlow/views/GetStarted';

const meta = {
	title: 'Components/ImportFlow/Views/GetStarted',
	component: GetStarted,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof GetStarted>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		costValue: { control: 'number' },
		costExchangeRate: { control: 'number' },
		network: { control: 'text' },
		networkOptions: { control: 'object' },
		className: { control: 'text' },
		onBack: { action: 'onBack' },
		onChangeNetwork: { action: 'onChangeNetwork' },
		onClickStart: { action: 'onClickStart' },
	},
	args: {
		costValue: 20,
		costExchangeRate: 1,
		network: '',
		networkOptions: [
			{
				key: 'ethereum',
				name: 'Ethereum Mainnet',
				icon: <EthereumLogo className="w-6 h-6" />,
				fee: 13.28,
			},
			{
				key: 'polygon',
				name: 'Base Chain',
				icon: <BaseNetworkIcon className="w-6 h-6" />,
				fee: 0.0328,
			},
		],
		className: 'w-[520px]',
	},
	tags: ['autodocs'],
};

export const WithoutNetworks: Story = {
	argTypes: {},
	args: {} as any,
	render: () => {
		return <GetStarted costValue={20} costExchangeRate={1} />;
	},
};

export const ControlledNetworks: Story = {
	argTypes: {},
	args: {} as any,
	render: () => {
		const [network, setNetwork] = useState<string>('');
		return (
			<GetStarted
				costValue={20}
				costExchangeRate={1}
				network={network}
				onChangeNetwork={setNetwork}
				networkOptions={[
					{
						key: 'ethereum',
						name: 'Ethereum Mainnet',
						icon: <EthereumLogo className="w-6 h-6" />,
						fee: 13.28,
					},
					{
						key: 'polygon',
						name: 'Base Chain',
						icon: <BaseNetworkIcon className="w-6 h-6" />,
						fee: 0.0328,
					},
				]}
			/>
		);
	},
};
