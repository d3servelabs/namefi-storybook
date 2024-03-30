import type { Meta, StoryObj } from '@storybook/react';
import '../../../../index.css';
import '../../../../App.css';
import { EthereumLogo} from '../../../../components/Core/icons/EthereumLogo'
import { MintStep } from '../../../../components/ImportFlow/views/MintStep';

const meta = {
	title: 'Components/ImportFlow/Views/MintStep',
	component: MintStep,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof MintStep>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		networkIcon: { control: 'object' },
		progressDescription: { control: 'object' },
		progressHref: { control: 'text' },
		onClickImportAnother: { action: 'onClickImportAnother' },
		className: { control: 'text' },
	},
	args: {
		networkIcon: <EthereumLogo />,
		progressDescription: 'We\'re working on minting example.com.',
		progressHref: 'https://example.com',
		className: 'w-[520px]',
	},
	tags: ['autodocs'],
};

export const UnknownNetworkAndShowProgressNumber: Story = {
	argTypes: {},
	args: {} as any,
	render: () => {
		return (
			<MintStep
				progressDescription={<>We're working on minting example.com. <span className="text-primary-500">(40%)</span></>}
				progressHref="https://example.com"
			/>
		);
	},
};
