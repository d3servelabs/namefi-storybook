import type { Meta, StoryObj } from '@storybook/react';
import '../../../../index.css';
import '../../../../App.css';
import { LinkChip } from '../../../../components/DomainOwned/components/LinkChip';

const meta = {
	title: 'Templates/DomainOwned/Components/LinkChip',
	component: LinkChip,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof LinkChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		children: { control: 'text' },
		href: { control: 'text' },
		target: { control: 'text' },
		className: { control: 'text' },
	},
	args: {
		children: 'OpenSea',
		href: 'https://opensea.io/',
		target: '_blank',
		className: '',
	},
	tags: ['autodocs'],
};
