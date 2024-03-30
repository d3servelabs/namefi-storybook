import type { Meta, StoryObj } from '@storybook/react';
import '../../../../../index.css';
import '../../../../../App.css';
import { ImportFlowLayout } from '../../../../../components/ImportFlow/components/ImportFlowLayout';
import { ActionButton } from '../../../../../components/ImportFlow/components/ActionButton';
import { Steps } from '../../../../../components/ImportFlow/components/Steps';
import { DoneIcon } from '../../../../../components/Core/icons/Done';
import YellowCatPNG from '../../../../../assets/yellow-cat.png';

const meta = {
	title: 'Components/ImportFlow/Components/Layouts/Main',
	component: ImportFlowLayout.Main,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof ImportFlowLayout.Main>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		icon: { control: 'object' },
		title: { control: 'text' },
		description: { control: 'text' },
		illustration: { control: 'object' },
		steps: { control: 'object' },
		children: { control: 'object' },
		onBack: { action: 'onBack' },
		className: { control: 'text' },
	},
	args: {
		icon: <DoneIcon />,
		title: 'Auth-code verified.',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		illustration: '',
		steps: '',
		children: (
			<div className="text-sm text-black-500 mt-6">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit
			</div>
		),
	},
	tags: ['autodocs'],
};

export const Advance: Story = {
	args: {
		icon: <DoneIcon />,
		title: 'Lorem ipsum dolor.',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		illustration: <img src={YellowCatPNG} className="ml-5" />,
		steps: (
			<Steps
				items={['Foo', 'Bar', 'Baz', 'Quux']}
				current={1}
				itemClassName="min-w-32"
				className="mb-12"
			/>
		),
		children: (
			<div className="mt-2">
				<div className="text-sm text-black-500">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit
				</div>
				<ImportFlowLayout.Actions className="mt-4">
					<ActionButton>Submit</ActionButton>
				</ImportFlowLayout.Actions>
			</div>
		),
	},
	tags: ['autodocs'],
};
