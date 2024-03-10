import type { Meta, StoryObj } from '@storybook/react';
import '../../../../index.css';
import '../../../../App.css';
import { ScoreStatistic } from '../../../../components/Templates/ParkingMode';

const meta = {
	title: 'Pages/ParkingMode/Components/Statistic/Variants/ScoreStatistic',
	component: ScoreStatistic,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof ScoreStatistic>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		title: { control: 'text' },
		tip: { control: 'text' },
		score: { control: 'number' },
		provider: { control: 'text' },
		className: { control: 'text' },
	},
	args: {
		title: 'Score',
		tip: 'Lorem ipsum dolor sit amet',
		score: 100,
		provider: 'XXXXXX',
		className: '',
	},
	tags: ['autodocs'],
};
