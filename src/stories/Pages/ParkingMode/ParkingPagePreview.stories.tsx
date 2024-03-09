import type { Meta, StoryObj } from '@storybook/react';
import '../../../index.css';
import '../../../App.css';
import { ParkingPagePreview } from '../../../pages/ParkingMode/ParkingPagePreview';

const meta = {
	title: 'Pages/ParkingMode/ParkingPagePreview',
	component: ParkingPagePreview,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof ParkingPagePreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		domain: { control: 'text' },
		className: { control: 'text' },
	},
	args: {
		domain: 'example.com',
		className: '',
	},
	tags: ['autodocs'],
	render: ({ domain, className }: any) => {
		return (
			<div className="w-[390px] h-[844px]">
				<ParkingPagePreview domain={domain} className={className} />
			</div>
		);
	},
};
