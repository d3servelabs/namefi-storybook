import type { Meta, StoryObj } from '@storybook/react';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { Button, NotificationsDropdown, SolidButton } from '@namefi/ui';

const meta = {
	title: 'Components/Notifications/Components/NotificationsDropdown',
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof NotificationsDropdown>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
	argTypes: {} as any,
	args: {} as any,
	render: () => {
		return (
			<NotificationsDropdown.Root className="w-[480px]">
				<NotificationsDropdown.Header className="text-white">
					Header
				</NotificationsDropdown.Header>
				<NotificationsDropdown.Body className="p-4 text-white">
					Body
				</NotificationsDropdown.Body>
				<NotificationsDropdown.Footer>
					<Button className="w-auto border-white font-primary text-sm text-white">
						Cancel
					</Button>
					<SolidButton className="w-auto font-primary text-base">
						Submit <ArrowRightIcon />
					</SolidButton>
				</NotificationsDropdown.Footer>
			</NotificationsDropdown.Root>
		);
	},
};
