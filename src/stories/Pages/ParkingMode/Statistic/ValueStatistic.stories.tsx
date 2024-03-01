import type { Meta, StoryObj } from '@storybook/react';
import '../../../../index.css';
import '../../../../App.css';
import { ValueStatistic } from '../../../../pages/ParkingMode/Statistic/ValueStatistic';
import { usePrettyPrice } from '../../../../pages/ParkingMode/hooks/usePrettyPrice';

const meta = {
	title: 'Pages/ParkingMode/Statistic/Variants/ValueStatistic',
	component: ValueStatistic,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof ValueStatistic>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		title: { control: 'text' },
		tip: { control: 'text' },
		value: { control: 'number' },
		unit: { control: 'text' },
		description: { control: 'text' },
		className: { control: 'text' },
	},
	args: {
		title: 'Value',
		tip: 'Lorem ipsum dolor sit amet',
		value: 100,
		unit: '$NFSC',
		description: 'Lorem ipsum dolor sit amet',
		className: '',
	},
	tags: ['autodocs'],
};

export const EstimatedValue: Story = {
	argTypes: {
		title: { control: 'text' },
		value: { control: 'number' },
		unit: { control: 'text' },
		dollar: { control: 'number' },
		tip: { control: 'text' },
	} as any,
	args: {
		title: 'Estimated Value',
		value: 20000,
		unit: '$NFSC',
		dollar: 20000,
		tip: 'Lorem ipsum dolor sit amet',
	} as any,
	tags: ['autodocs'],
	render: ({ title, value, unit, dollar, tip }: any) => {
		const prettyDollar = usePrettyPrice(dollar);
		return (
			<ValueStatistic
				title={title}
				tip={tip}
				value={value}
				unit={unit}
				description={`≈$${prettyDollar}`}
			/>
		);
	},
};
