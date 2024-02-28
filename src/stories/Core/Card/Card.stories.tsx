import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader } from '../../../components/Core/Card';

interface Props {
	onBackDisabled?: boolean;
	onBack?: () => void;
	className?: string;
  children?: React.ReactNode;
}
const Component = ({ onBackDisabled, onBack, className, children }: Props) => {
	return (
		<Card className={className}>
			<CardHeader onBack={onBackDisabled ? void 0 : onBack}>{children}</CardHeader>
		</Card>
	);
};

const meta = {
	title: 'Core/Card',
	component: Component,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		onBackDisabled: { control: 'boolean' },
		onBack: { action: 'onBack' },
    children: { control: 'text' }, 
		className: { control: 'text' },
	},
	args: {
    onBackDisabled: false,
    children: 'Card Title',
    className: 'w-[320px]',
  },
};
