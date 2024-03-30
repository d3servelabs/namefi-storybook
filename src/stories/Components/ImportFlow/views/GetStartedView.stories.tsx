import type { Meta, StoryObj } from '@storybook/react';
import '../../../../index.css';
import '../../../../App.css';
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
		networkOptions: { control: 'object' },
		className: { control: 'text' },
		onBack: { action: 'onBack' },
		onClickStart: { action: 'onClickStart' },
	},
	args: {
		costValue: 20,
		costExchangeRate: 1,
		networkOptions: [
			{ label: 'Ethereum', value: 'ethereum' },
			{ label: 'Polygon', value: 'polygon' },
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

export const WithNetworks: Story = {
	argTypes: {},
	args: {} as any,
	render: () => {
		return (
			<GetStarted
				costValue={20}
				costExchangeRate={1}
				networkOptions={[
					{ label: 'Ethereum', value: 'ethereum' },
					{ label: 'Polygon', value: 'polygon' },
				]}
			/>
		);
	},
};
