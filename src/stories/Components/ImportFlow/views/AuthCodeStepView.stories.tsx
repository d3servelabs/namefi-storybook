import { useState, useCallback } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import '../../../../index.css';
import '../../../../App.css';
import {
	AuthCodeStep,
	type AuthCodeStepStatus,
} from '../../../../components/ImportFlow/views/AuthCodeStep';

const meta = {
	title: 'Components/ImportFlow/Views/AuthCodeStep',
	component: AuthCodeStep,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof AuthCodeStep>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	argTypes: {
		status: { control: 'radio', options: ['INPUT', 'LOADING', 'FAILED', 'VERIFIED'] },
		authCode: { control: 'text' },
		authCodeError: { control: 'text' },
		walletConnected: { control: 'boolean' },
		onAuthCodeChange: { action: 'onAuthCodeChange' },
		onClickVerify: { action: 'onClickVerify' },
		onClickConnectWallet: { action: 'onClickConnectWallet' },
		onClickNext: { action: 'onClickNext' },
		onBack: { action: 'onBack' },
		className: { control: 'text' },
	},
	args: {
		authCode: '',
		authCodeError: '',
		status: 'INPUT',
		className: 'w-[520px]',
	},
	tags: ['autodocs'],
};

export const VerifyFailed: Story = {
	argTypes: {},
	args: {} as any,
	render: () => {
		const [authCode, setAuthCode] = useState('foobar');
		const [authCodeError, setAuthCodeError] = useState('Auth-code incorrect.');
		const handleAuthCodeChange = useCallback((value: string) => {
			setAuthCode(value);
			setAuthCodeError('');
		}, []);
		const handleClickVerify = useCallback(() => {
			// simluating failed verification
			setAuthCodeError('Auth-code incorrect.');
		}, []);
		return (
			<AuthCodeStep
				status="FAILED"
				authCode={authCode}
				onAuthCodeChange={handleAuthCodeChange}
				authCodeError={authCodeError}
				onClickVerify={handleClickVerify}
			/>
		);
	},
};

export const Controlled: Story = {
	name: 'Controlled',
	argTypes: {} as any,
	args: {} as any,
	render: () => {
		const EXPECTED_AUTH_CODE = '1234';
		const [status, setStatus] = useState<AuthCodeStepStatus>('INPUT');
		const [authCode, setAuthCode] = useState('');
		const [authCodeError, setAuthCodeError] = useState('');
		const [wallectConnected, setWalletConnected] = useState(false);
		const handleAuthCodeChange = useCallback((value: string) => {
			setAuthCode(value);
			setAuthCodeError('');
		}, []);
		const handleClickVerify = useCallback(async () => {
			setStatus('LOADING');
			// simluating failed verification
			setTimeout(() => {
				if (authCode !== EXPECTED_AUTH_CODE) {
					setAuthCodeError('Auth-code incorrect.');
					setStatus('FAILED');
					return;
				}
				setStatus('VERIFIED');
			}, 1000);
		}, [authCode]);
		const handleClickConnectWallet = useCallback(async () => {
			setWalletConnected(true);
		}, []);
		return (
			<>
				<div className="text-sm text-white tracking-wide bg-grey rounded-2 p-4 mb-8">
					Tips: Try auth code <span className="font-primary">1234</span>
				</div>
				<AuthCodeStep
					status={status}
					authCode={authCode}
					authCodeError={authCodeError}
					walletConnected={wallectConnected}
					onAuthCodeChange={handleAuthCodeChange}
					onClickVerify={handleClickVerify}
					onClickConnectWallet={handleClickConnectWallet}
				/>
			</>
		);
	},
};
