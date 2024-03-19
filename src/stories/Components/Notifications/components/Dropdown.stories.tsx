import type { Meta, StoryObj } from '@storybook/react';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { Button, SolidButton } from '../../../../components/Core/Buttons';
import { Dropdown } from '../../../../components/Templates/Notifications';

const meta = {
	title: 'Components/Notifications/Components/Dropdown',
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
	argTypes: {} as any,
	args: {} as any,
	render: () => {
		return (
			<Dropdown.Root className="w-[480px]">
				<Dropdown.Header className="text-white">Header</Dropdown.Header>
				<Dropdown.Body className="p-4 text-white">Body</Dropdown.Body>
				<Dropdown.Footer>
					<Button className="text-sm text-white font-primary border-white w-auto">
						Cancel
					</Button>
					<SolidButton className="text-base font-primary w-auto">
						Submit <ArrowRightIcon />
					</SolidButton>
				</Dropdown.Footer>
			</Dropdown.Root>
		);
	},
};
