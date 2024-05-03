import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { NamefiBrandText } from '../../../../components/Core/NamefiBrandText';
import { FAQCard } from '../../../../pages/LandingPage/components/FAQCard';

const meta = {
	title: 'Pages/LandingPage/Components/FAQCard',
	component: FAQCard,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof FAQCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		question: { control: 'text' },
		answer: { control: 'text' },
		expanded: { control: 'boolean' },
		onExpand: { action: 'onExpand' },
		onCollapse: { action: 'onCollapse' },
		className: { control: 'text' },
	},
	args: {
		question: 'What is Namefi?',
		answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		className: 'w-[800px]',
	},
};

export const Controlled: Story = {
	argTypes: {},
	args: {} as any,
	render: () => {
		const [isExpanded, setIsExpanded] = useState(false);
		return (
			<FAQCard
				question={
					<span>
						What is <NamefiBrandText className="text-[1em]">Namefi</NamefiBrandText>?
					</span>
				}
				answer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
				expanded={isExpanded}
				onExpand={() => setIsExpanded(true)}
				onCollapse={() => setIsExpanded(false)}
				className="w-[800px]"
			/>
		);
	},
};
