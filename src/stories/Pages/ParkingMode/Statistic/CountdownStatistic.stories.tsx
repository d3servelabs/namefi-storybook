import type { Meta, StoryObj } from '@storybook/react';
import '../../../../index.css';
import '../../../../App.css';
import { CountdownStatistic } from '../../../../components/Templates/ParkingMode';

const meta = {
	title: 'Pages/ParkingMode/Components/Statistic/Variants/CountdownStatistic',
	component: CountdownStatistic,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof CountdownStatistic>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		title: { control: 'text' },
		tip: { control: 'text' },
		time: { control: 'date' },
		description: { control: 'text' },
		className: { control: 'text' },
	},
	args: {
		title: 'Countdown',
		tip: 'Lorem ipsum dolor sit amet',
		time: new Date(+new Date() + 1000 * 60 * 60 * 24 * 3),
		description: 'Lorem ipsum dolor sit amet',
		className: '',
	},
	tags: ['autodocs'],
};

export const DealCountdown: Story = {
	argTypes: {
		time: { control: 'date' },
		tip: { control: 'text' },
	} as any,
	args: {
		time: new Date(+new Date() + 1000 * 60 * 60 * 24 * 3),
		tip: '',
	} as any,
	tags: ['autodocs'],
	render: ({ time, tip }: any) => {
		return (
			<CountdownStatistic
				title="Deal ends in"
				tip={tip}
				time={time}
			/>
		);
	},
};
