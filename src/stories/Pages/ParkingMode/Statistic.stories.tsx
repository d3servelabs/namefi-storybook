import type { Meta, StoryObj } from '@storybook/react';
import '../../../index.css';
import '../../../App.css';
import { Statistic } from '../../../pages/ParkingMode/Statistic';
import { usePrettyPrice } from '../../../pages/ParkingMode/usePrettyPrice';

const meta = {
	title: 'Pages/ParkingMode/Statistic',
	component: Statistic,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof Statistic>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		title: { control: 'text' },
		tip: { control: 'text' },
		children: { control: 'text' },
		description: { control: 'text' },
		className: { control: 'text' },
	},
	args: {
		title: 'Title',
		tip: 'Tips!',
		children: '100',
		description: 'Perfect',
		className: '',
	},
	tags: ['autodocs'],
};

export const EstimatedValue: Story = {
	argTypes: {
		value: { control: 'number' },
		unit: { control: 'text' },
		dollar: { control: 'number' },
		tip: { control: 'text' },
	} as any,
	args: {
		value: 20000,
		unit: '$NFSC',
		dollar: 20000,
		tip: 'Tips!',
	} as any,
	tags: ['autodocs'],
	render: ({ value, unit, dollar, tip }: any) => {
		const prettyValue = usePrettyPrice(value, 0);
		const prettyDollar = usePrettyPrice(dollar);
		return (
			<Statistic
				title="Estimated Value"
				tip={tip}
				description={`≈$${prettyDollar}`}>
				<div className="flex items-end gap-8">
					<span>{prettyValue}</span>
					<span className="text-xl text-[#d6d6d6]">{unit}</span>
				</div>
			</Statistic>
		);
	},
};

export const NameScore: Story = {
	argTypes: {
		value: { control: 'number' },
		provider: { control: 'string' },
		tip: { control: 'text' },
	} as any,
	args: {
		value: 87,
		provider: 'XXXXXX',
		tip: 'Tips!',
	} as any,
	tags: ['autodocs'],
	render: ({ value, provider, tip }: any) => {
		return (
			<Statistic
				title="Name Score"
				tip={tip}
				description={<div className="flex justify-end">by {provider}</div>}>
				<div className="w-[280px] flex justify-center items-end">
					<span>{value}</span>
					<span className="text-xl text-[#d6d6d6]">/100</span>
				</div>
			</Statistic>
		);
	},
};
