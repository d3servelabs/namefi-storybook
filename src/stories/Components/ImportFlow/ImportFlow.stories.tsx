import { useState, useMemo, useCallback, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import '../../../index.css';
import '../../../App.css';
import { EthereumLogo } from '../../../components/Core/icons/EthereumLogo';
import { ImportFlow } from '../../../components/ImportFlow/ImportFlow';

const createMockChecker = (name: string, successAfterCalledCount: number = 1) => {
	let count = 0;
	return () =>
		new Promise<boolean>((resolve) =>
			setTimeout(() => {
				console.log(`Checker called. Name: ${name}, Count: ${count}`);
				resolve(count++ >= successAfterCalledCount);
			}, 1000),
		);
};

const meta = {
	title: 'Components/ImportFlow',
	component: ImportFlow,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof ImportFlow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Controlled: Story = {
	argTypes: {
		mintURL: { control: { type: 'text' } },
		onClickImportAnother: { action: 'onClickImportAnother' },
		onClickViewDomain: { action: 'onClickViewDomain' },
		onBack: { action: 'onBack' },
	} as any,
	args: {} as any,
	render: ({ mintURL: defaultMintURL, onClickImportAnother, onClickViewDomain, onBack }: any) => {
		const [mintURL, setMintURL] = useState<string>(defaultMintURL);
		const verifyUnlock = useMemo(() => createMockChecker('unlock'), []);
		const verifyAuthCode = useMemo(() => createMockChecker('auth-code'), []);
		const checkIfRegistrarDone = useMemo(() => {
			const check = createMockChecker('if-registrar-done');
			return async () => {
				if (await check()) {
					setMintURL('https://example.com');
					return true;
				}
				return false;
			};
		}, []);
		const checkIfMintDone = useMemo(() => createMockChecker('if-mint-done', 5), []);
		const [walletConnected, setWalletConnected] = useState(false);
		const handleConnectWallet = useCallback(async () => {
			setWalletConnected(true);
		}, []);
		const handleImportDomain = useCallback(async () => {
			// simluating import api
			return true;
		}, []);
		useEffect(() => {
			setMintURL(defaultMintURL);
		}, [defaultMintURL]);

		return (
			<ImportFlow
				domain="example.com"
				mintIcon={<EthereumLogo />}
				mintURL={mintURL}
				verifyUnlock={verifyUnlock}
				verifyAuthCode={verifyAuthCode}
				walletConnected={walletConnected}
				connectWallet={handleConnectWallet}
				importDomain={handleImportDomain}
				checkIfRegistrarDone={checkIfRegistrarDone}
				checkIfRegistrarDoneInterval={1000}
				checkIfMintDone={checkIfMintDone}
				checkIfMintDoneInterval={1000}
				onClickImportAnother={onClickImportAnother}
				onClickViewDomain={onClickViewDomain}
				onBack={onBack}
			/>
		);
	},
};
