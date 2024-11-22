import type { Meta, StoryObj } from '@storybook/react';
import { noop, OtpInputField } from '@namefi/ui';
import { FC, useState } from 'react';

const meta = {
	title: 'Components/OTPInputField',
	component: OtpInputField,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof OtpInputField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const OTPInput: Story = {
	argTypes: {
		fieldLength: { type: 'number' },
		otpValue: { type: 'string' },
		onValueChange: { action: 'click' },
	},
	args: {
		fieldLength: 6,
		otpValue: '',
		onValueChange: noop,
	},
	render: (props) => <Demo {...props} />,
};

const Demo: FC<{ fieldLength: number; otpValue: string }> = ({ fieldLength, otpValue }) => {
	const [otp, setOtp] = useState(otpValue);
	const onValueChange = (value: string) => setOtp(value);
	return <OtpInputField otpValue={otp} fieldLength={fieldLength} onValueChange={onValueChange} />;
};
