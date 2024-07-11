import type { Meta, StoryObj } from '@storybook/react';
import { Surface } from '@namefi/ui';

const meta = {
	title: 'Core/Surface',
	component: Surface,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof Surface>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		children: { control: 'text' },
		className: { control: 'text' },
	},

	render() {
		return (
			<Surface className={'grid w-[320px] place-items-center p-5'}>Surface Content</Surface>
		);
	},
};
