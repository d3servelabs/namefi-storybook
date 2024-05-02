import { useState, useCallback } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {
	Subscription,
	type SubscriptionDisplay,
} from '../../../../pages/LandingPage/components/Subscription';
const meta = {
	title: 'Pages/LandingPage/Components/Subscription',
	component: Subscription,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Subscription>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		display: { control: 'radio', options: ['inline-form', 'button'] },
		onDisplayChange: { action: 'onDisplayChange' },
		email: { control: 'text' },
		onEmailChange: { action: 'onEmailChange' },
		onSubmit: { action: 'onSubmit' },
		buttonText: { control: 'text' },
		submitText: { control: 'text' },
		successText: { control: 'text' },
		placeholder: { control: 'text' },
		loading: { control: 'boolean' },
		submitted: { control: 'boolean' },
		className: { control: 'text' },
	},
	args: {
		display: 'button',
		email: '',
		buttonText: 'Join Waitlist',
		submitText: 'Join Waitlist',
		successText: 'Joined!',
		placeholder: 'Enter your email',
		loading: false,
		submitted: false,
		className: 'w-[560px]',
	},
};

export const Controlled: Story = {
	argTypes: {},
	args: {} as any,
	render: () => {
		const [display, setDisplay] = useState<SubscriptionDisplay>('button');
		const [email, setValue] = useState<string>('');
		const [isLoading, setIsLoading] = useState<boolean>(false);
		const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
		const onDisplayChange = useCallback(
			(display) => {
				setDisplay(display);
			},
			[setDisplay],
		);
		const onEmailChange = useCallback(
			(email) => {
				setValue(email);
				setIsSubmitted(false);
			},
			[setValue, setIsSubmitted],
		);
		const onSubmit = useCallback(
			async (payload) => {
				setIsLoading(true);
				action('onSubmit')(payload);
				await new Promise((resolve) => setTimeout(resolve, 2000));
				setIsSubmitted(true);
				setIsLoading(false);
			},
			[setIsLoading, setIsSubmitted],
		);
		return (
			<Subscription
				display={display}
				onDisplayChange={onDisplayChange}
				email={email}
				onEmailChange={onEmailChange}
				onSubmit={onSubmit}
				loading={isLoading}
				submitted={isSubmitted}
				className="w-[560px]"
			/>
		);
	},
};

export const ControlledForm: Story = {
	argTypes: {},
	args: {} as any,
	render: () => {
		const [email, setValue] = useState<string>('');
		const [isLoading, setIsLoading] = useState<boolean>(false);
		const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
		const onEmailChange = useCallback(
			(email) => {
				setValue(email);
				setIsSubmitted(false);
			},
			[setValue, setIsSubmitted],
		);
		const onSubmit = useCallback(
			async (payload) => {
				setIsLoading(true);
				action('onSubmit')(payload);
				await new Promise((resolve) => setTimeout(resolve, 2000));
				setIsSubmitted(true);
				setIsLoading(false);
			},
			[setIsLoading, setIsSubmitted],
		);
		return (
			<Subscription
				display="inline-form"
				email={email}
				onEmailChange={onEmailChange}
				onSubmit={onSubmit}
				loading={isLoading}
				submitted={isSubmitted}
				className="w-[560px]"
			/>
		);
	},
};
