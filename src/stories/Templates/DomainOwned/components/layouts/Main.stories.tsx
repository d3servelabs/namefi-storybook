import type { Meta, StoryObj } from '@storybook/react';
import '../../../../../index.css';
import '../../../../../App.css';
import { DomainOwnedLayout } from '../../../../../components/DomainOwned/components/DomainOwnedLayout';
import { DoneIcon } from '../../../../../components/Core/icons/Done';
import { ReverseRightIcon } from '../../../../../components/Core/icons/ReverseRight';
import { BookmarkIcon } from '../../../../../components/Core/icons/Bookmark';
import { LightningIcon } from '../../../../../components/Core/icons/Lightning';

const meta = {
	title: 'Templates/DomainOwned/Components/Layouts/Main',
	component: DomainOwnedLayout.Main,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof DomainOwnedLayout.Main>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
	argTypes: {
		icon: { control: 'object' },
		title: { control: 'text' },
		description: { control: 'text' },
		shortcuts: { control: 'object' },
		children: { control: 'object' },
		className: { control: 'text' },
	},
	args: {
		icon: <DoneIcon />,
		title: 'You own this domain.',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		shortcuts: [
			{
				icon: <ReverseRightIcon />,
			},
			{
				icon: <BookmarkIcon />,
			},
			{
				icon: <LightningIcon />,
			},
		],
		children: (
			<div className="text-sm text-black-500">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit
			</div>
		),
	},
	tags: ['autodocs'],
};
