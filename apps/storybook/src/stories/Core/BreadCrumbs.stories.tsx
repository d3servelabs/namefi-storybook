import type { Meta, StoryObj } from '@storybook/react';
import { BreadCrumbs } from '@namefi/ui';
const BreadCrumbsRoot = BreadCrumbs;
const meta = {
	title: 'Core/BreadCrumbs',
	component: BreadCrumbsRoot,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof BreadCrumbsRoot>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
	args: {
		activeIndex: 2,
	},
	render() {
		return (
			<BreadCrumbsRoot>
				<BreadCrumbsRoot.Crumb href={'#'}>...</BreadCrumbsRoot.Crumb>
				<BreadCrumbsRoot.Crumb href={'#'}>example.com</BreadCrumbsRoot.Crumb>
				<BreadCrumbsRoot.Crumb href={'#'}>Settings</BreadCrumbsRoot.Crumb>
			</BreadCrumbsRoot>
		);
	},
};
