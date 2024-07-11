import type { Meta, StoryObj } from '@storybook/react';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { Button, SolidButton } from '@namefi/ui';
import { Dropdown } from '@namefi/ui';

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
					<Button className="w-auto border-white font-primary text-sm text-white">
						Cancel
					</Button>
					<SolidButton className="w-auto font-primary text-base">
						Submit <ArrowRightIcon />
					</SolidButton>
				</Dropdown.Footer>
			</Dropdown.Root>
		);
	},
};
