import type { Meta, StoryObj } from '@storybook/react';
import { Confetti } from '@namefi/ui';

const meta = {
	title: 'Components/Confetti',
	component: Confetti,
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: `
A festive confetti animation component that creates a celebratory effect with falling pieces.
The confetti pieces come in various shapes (rectangles, curved lines, and curls) and colors,
falling with realistic physics including spin, wobble, and perspective scaling effects.
        `,
			},
		},
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Confetti>;

export default meta;
type Story = StoryObj<typeof Confetti>;

// Basic demonstration of the confetti effect
export const Default: Story = {
	args: {},
};

// Story showing the confetti effect in a dark theme container
export const DarkTheme: Story = {
	args: {},
	parameters: {
		backgrounds: {
			default: 'dark',
		},
	},
	decorators: [
		(Story) => (
			<div style={{ minHeight: '100vh', background: '#1a1a1a' }}>
				<Story />
			</div>
		),
	],
};

// Story showing the confetti with some content beneath
export const WithContent: Story = {
	args: {},
	decorators: [
		(Story) => (
			<div style={{ padding: '2rem', textAlign: 'center', color: '#ffffff' }}>
				<h1
					style={{
						fontSize: '2rem',
						marginBottom: '1rem',
					}}>
					🎉 Congratulations! 🎉
				</h1>
				<p style={{ fontSize: '1.2rem' }}>You&apos;ve achieved something amazing!</p>
				<Story />
			</div>
		),
	],
};
