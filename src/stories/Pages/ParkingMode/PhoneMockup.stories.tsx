import type { Meta, StoryObj } from '@storybook/react';
import '../../../index.css';
import '../../../App.css';
import { PhoneMockup } from '../../../components/Templates/ParkingMode';

const meta = {
	title: 'Pages/ParkingMode/Components/PhoneMockup',
	component: PhoneMockup,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof PhoneMockup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		children: { control: 'text' },
		className: { control: 'text' },
	},
	args: {
		children: '',
		className: 'text-sm',
	},
	tags: ['autodocs'],
};

export const Webpage: Story = {
	argTypes: {
		url: { control: 'text' },
	} as any,
	args: {
		url: 'https://namefi.io',
	} as any,
	render: ({ url }: any) => {
		return (
			<PhoneMockup>
				<iframe className="w-full h-full" src={url} />
			</PhoneMockup>
		);
	},
};
