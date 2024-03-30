import { useState, useCallback, useEffect } from 'react';
import { GetStarted } from './views/GetStarted';
import { UnlockStep, type UnlockStepStatus } from './views/UnlockStep';
import { AuthCodeStep, type AuthCodeStepStatus } from './views/AuthCodeStep';
import { WaitRegistrarStep, type WaitRegistrarStepStatus } from './views/WaitRegistrarStep';
import { MintStep } from './views/MintStep';
import { Completed } from './views/Completed';

export type ImportFlowView =
	| 'GET_STARTED'
	| 'UNLOCK'
	| 'AUTH_CODE'
	| 'WAIT_REGISTRAR'
	| 'MINT'
	| 'COMPLETED';

export interface ImportFlowProps {
	domain: string;
	mintIcon?: React.ReactNode;
	mintURL?: string;
	verifyUnlock: (domain: string) => Promise<boolean>;
	verifyAuthCode: (domain: string) => Promise<boolean>;
	walletConnected: boolean;
	connectWallet: () => Promise<void>;
	importDomain: (domain: string) => Promise<boolean>;
	checkIfRegistrarDone: (domain: string) => Promise<boolean>;
	checkIfRegistrarDoneInterval: number;
	checkIfMintDone: (domain: string) => Promise<boolean>;
	checkIfMintDoneInterval: number;
	onClickImportAnother?: () => void;
	onClickViewDomain?: (domain: string) => void;
	onBack?: () => void;
}
export const ImportFlow = ({
	domain,
	mintIcon,
	mintURL,
	verifyUnlock,
	verifyAuthCode,
	walletConnected,
	connectWallet,
	importDomain,
	checkIfRegistrarDone,
	checkIfRegistrarDoneInterval = 1000,
	checkIfMintDone,
	checkIfMintDoneInterval = 1000,
	onClickImportAnother,
	onClickViewDomain,
	onBack,
}: ImportFlowProps) => {
	const [view, setView] = useState<ImportFlowView>('GET_STARTED');
	const [unlockStepStatus, setUnlockStepStatus] = useState<UnlockStepStatus>('DEFAULT');
	const [authCodeStepStatus, setAuthCodeStepStatus] = useState<AuthCodeStepStatus>('INPUT');
	const [waitRegistrarStepStatus, setWaitRegistrarStepStatus] =
		useState<WaitRegistrarStepStatus>('RECHECK');

	const handleVerifyUnlock = useCallback(async () => {
		setUnlockStepStatus('LOADING');
		setUnlockStepStatus((await verifyUnlock(domain)) ? 'UNLOCKED' : 'LOCKED');
	}, [domain, verifyUnlock]);

	const [authCode, setAuthCode] = useState('');
	const [authCodeError, setAuthCodeError] = useState('');
	const handleAuthCodeChange = useCallback((input: string) => {
		setAuthCodeError('');
		setAuthCode(input);
	}, []);
	const handleVerifyAuthCode = useCallback(async () => {
		setAuthCodeStepStatus('LOADING');
		if (!(await verifyAuthCode(domain))) {
			setAuthCodeStepStatus('FAILED');
			setAuthCodeError('Auth-code incorrect.');
			return;
		}
		setAuthCodeStepStatus('VERIFIED');
	}, [domain]);
	const handleImportDomain = useCallback(async () => {
		if (!await importDomain(domain)) {
			return;
		}
		setView('WAIT_REGISTRAR');
		setWaitRegistrarStepStatus('FIRST_TIME');
	}, [importDomain, domain])

	useEffect(() => {
		if (mintURL) {
			setView('MINT');
		} else {
			setView('GET_STARTED');
		}
	}, [mintURL]);

	useEffect(() => {
		if (view !== 'WAIT_REGISTRAR') return;
		const timer = setInterval(async () => {
			if (await checkIfRegistrarDone(domain)) {
				clearInterval(timer);
				setView('MINT');
			}
		}, checkIfRegistrarDoneInterval);
		return () => clearInterval(timer);
	}, [checkIfRegistrarDone, checkIfRegistrarDoneInterval, view, domain]);

	useEffect(() => {
		if (view !== 'MINT') return;
		const timer = setInterval(async () => {
			if (await checkIfMintDone(domain)) {
				clearInterval(timer);
				setView('COMPLETED');
			}
		}, checkIfMintDoneInterval);
		return () => clearInterval(timer);
	}, [checkIfMintDone, checkIfMintDoneInterval, view, domain]);

	switch (view) {
		case 'GET_STARTED': {
			return (
				<GetStarted
					costValue={20}
					costExchangeRate={1}
					networkOptions={[]}
					onClickStart={() => setView('UNLOCK')}
					onBack={onBack}
				/>
			);
		}
		case 'UNLOCK': {
			return (
				<UnlockStep
					status={unlockStepStatus}
					onClickVerify={handleVerifyUnlock}
					onClickNext={() => setView('AUTH_CODE')}
					onBack={onBack}
				/>
			);
		}
		case 'AUTH_CODE': {
			return (
				<AuthCodeStep
					status={authCodeStepStatus}
					authCode={authCode}
					authCodeError={authCodeError}
					walletConnected={walletConnected}
					onAuthCodeChange={handleAuthCodeChange}
					onClickVerify={handleVerifyAuthCode}
					onClickConnectWallet={connectWallet}
					onClickImportDomain={handleImportDomain}
					onBack={onBack}
				/>
			);
		}
		case 'WAIT_REGISTRAR': {
			return (
				<WaitRegistrarStep
					status={waitRegistrarStepStatus}
					onClickImportAnother={onClickImportAnother}
					onBack={onBack}
				/>
			);
		}
		case 'MINT': {
			return (
				<MintStep
					icon={mintIcon}
					progressDescription={`We're working on minting ${domain}.`}
					progressURL={mintURL}
					onClickImportAnother={onClickImportAnother}
					onBack={onBack}
				/>
			);
		}
		case 'COMPLETED': {
			return (
				<Completed
					domain={domain}
					progressDescription="Minting Completed."
					progressURL={mintURL}
					onClickViewDomain={onClickViewDomain}
					onBack={onBack}
				/>
			);
		}

		default: {
			return <></>;
		}
	}
};
