import type { Meta, StoryObj } from '@storybook/react';
import { IconCircleButton } from '@components/Buttons/IconCircleButton';
import PlusIconSource from '/assets/Plus.svg';
import DownloadIconSource from '/assets/Download.svg';
import DeleteIconSource from '/assets/Trash.svg';

const meta = {
	title: 'Components/Buttons/IconCircleButton',
	component: IconCircleButton,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof IconCircleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		iconSource: { control: 'select', options: [PlusIconSource, DownloadIconSource, DeleteIconSource]},
		onClick: { action: 'onClick' },
		disabled: { control: 'boolean' },
		className: { control: 'text' },
	},
	args: {
		iconSource: PlusIconSource,
		disabled: false,
	},
	tags: ['autodocs'],
};
