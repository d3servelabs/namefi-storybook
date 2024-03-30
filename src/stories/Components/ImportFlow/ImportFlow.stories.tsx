import { useState, useMemo, useCallback } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import '../../../index.css';
import '../../../App.css';
import { EthereumLogo } from '../../../components/Core/icons/EthereumLogo';
import BaseNetworkIcon from '../../../components/Core/icons/BaseNetwork';
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

const NETWORK_OPTIONS = [
	{
		key: 'ethereum',
		name: 'Ethereum Mainnet',
		icon: <EthereumLogo className="w-6 h-6" />,
		fee: 13.28,
	},
	{
		key: 'polygon',
		name: 'Base Chain',
		icon: <BaseNetworkIcon className="w-6 h-6" />,
		fee: 0.0328,
	},
]

export const Controlled: Story = {
	argTypes: {
		defaultDomainImported: { control: { type: 'boolean' } },
		onClickImportAnother: { action: 'onClickImportAnother' },
		onClickViewDomain: { action: 'onClickViewDomain' },
		onBack: { action: 'onBack' },
	} as any,
	args: {} as any,
	render: ({ defaultDomainImported, onClickImportAnother, onClickViewDomain, onBack }: any) => {
		const verifyUnlock = useMemo(() => createMockChecker('unlock'), []);
		const verifyAuthCode = useMemo(() => createMockChecker('auth-code'), []);
		const checkIfRegistrarDone = useMemo(() => createMockChecker('if-registrar-done'), []);
		const checkIfMintDone = useMemo(() => createMockChecker('if-mint-done', 5), []);
		const [walletConnected, setWalletConnected] = useState(false);
		const handleConnectWallet = useCallback(async () => {
			setWalletConnected(true);
		}, []);
		const handleImportDomain = useCallback(async (payload) => {
			// simluating import api
			console.log('Import Domain', payload)
			return true;
		}, []);

		return (
			<ImportFlow
				domain="example.com"
				costValue={20}
				costExchangeRate={1}
				networkOptions={NETWORK_OPTIONS}
				defaultDomainImported={defaultDomainImported}
				mintIcon={<EthereumLogo />}
				mintURL="https://example.com/"
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
