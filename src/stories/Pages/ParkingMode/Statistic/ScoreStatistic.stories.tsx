import type { Meta, StoryObj } from '@storybook/react';
import '../../../../index.css';
import '../../../../App.css';
import { ScoreStatistic } from '../../../../pages/ParkingMode/Statistic/ScoreStatistic';

const meta = {
	title: 'Pages/ParkingMode/Statistic/Variants/ScoreStatistic',
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
		description: { control: 'text' },
		className: { control: 'text' },
	},
	args: {
		title: 'Score',
		tip: 'Lorem ipsum dolor sit amet',
		score: 100,
		description: 'Lorem ipsum dolor sit amet',
		className: '',
	},
	tags: ['autodocs'],
};

export const NameScore: Story = {
	argTypes: {
		score: { control: 'number' },
		provider: { control: 'string' },
		tip: { control: 'text' },
	} as any,
	args: {
		score: 87,
		provider: 'XXXXXX',
		tip: 'Lorem ipsum dolor sit amet',
	} as any,
	tags: ['autodocs'],
	render: ({ score, provider, tip }: any) => {
		return (
			<ScoreStatistic
				title="Name Score"
				tip={tip}
				score={score}
				description={<div className="flex justify-end">by {provider}</div>}
			/>
		);
	},
};
