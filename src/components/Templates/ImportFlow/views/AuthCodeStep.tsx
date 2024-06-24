import React from 'react';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { CodeInputField } from '../../../Core/CodeInputField';
import { RefreshIcon } from '../../../Core/icons/Refresh';
import { DoneIcon } from '../../../Core/icons/Done';
import { ImportFlowLayout } from '../components/ImportFlowLayout';
import { ActionButton } from '../components/ActionButton';
import { Spinner } from '../components/Spinner';
import { Steps } from '../../DomainOwned/components/Steps';

export type AuthCodeStepStatus = 'INPUT' | 'LOADING' | 'FAILED' | 'VERIFIED';

export interface AuthCodeStepProps {
	status: AuthCodeStepStatus;
	authCode: string;
	authCodeError?: string;
	walletConnected?: boolean;
	onAuthCodeChange?: (value: string) => void;
	onClickVerify?: () => void;
	onClickImportDomain?: () => void;
	onClickConnectWallet?: () => void;
	onBack?: () => void;
	className?: string;
}

export const AuthCodeStep = ({
	status,
	authCode,
	authCodeError = '',
	walletConnected = false,
	onAuthCodeChange,
	onClickVerify,
	onClickImportDomain,
	onClickConnectWallet,
	onBack,
	className,
}: AuthCodeStepProps) => {
	const steps = (
		<Steps
			items={[
				'Unlock',
				status === 'VERIFIED' ? 'Code Entered' : 'Auth-Code',
				'Mint Namefi NFT',
				'Successfully Imported',
			]}
			current={1}
			itemClassName="min-w-32"
			className="mb-12"
		/>
	);
	const form = (
		<div className="mt-8 mb-9">
			{status === 'VERIFIED' ? (
				<CodeInputField className={'min-w-[275px]'} value={authCode} status="SUBMITTED" />
			) : (
				<CodeInputField
					value={authCode}
					className={'min-w-[275px]'}
					onValueChanged={onAuthCodeChange}
					incorrectAuthCode={!!authCodeError}
					status={status === 'FAILED' && authCodeError ? 'SUBMITTED' : 'NOTSUBMITTED'}
				/>
			)}
		</div>
	);
	switch (status) {
		case 'INPUT': {
			return (
				<ImportFlowLayout.Main
					title="Look for the Auth-Code."
					description="Enter it here and start minting your Namefi NFT."
					steps={steps}
					onBack={onBack}
					className={className}>
					{form}
					<ImportFlowLayout.Actions>
						<ActionButton
							icon={<ArrowRightIcon className="w-5 h-5" />}
							disabled={!authCode}
							onClick={onClickVerify}>
							Verify code
						</ActionButton>
					</ImportFlowLayout.Actions>
				</ImportFlowLayout.Main>
			);
		}
		case 'LOADING': {
			return (
				<ImportFlowLayout.Main
					title="Verifying code..."
					description="Give us just a few seconds."
					steps={steps}
					onBack={onBack}
					className={className}>
					<Spinner />
				</ImportFlowLayout.Main>
			);
		}
		case 'FAILED': {
			return (
				<ImportFlowLayout.Main
					title="Look for the Auth-Code."
					description="Re-enter auth-code and verify again."
					steps={steps}
					onBack={onBack}
					className={className}>
					{form}
					<ImportFlowLayout.Actions>
						<ActionButton
							icon={<RefreshIcon />}
							disabled={!authCode}
							onClick={onClickVerify}>
							Verify Again
						</ActionButton>
					</ImportFlowLayout.Actions>
				</ImportFlowLayout.Main>
			);
		}
		case 'VERIFIED': {
			return (
				<ImportFlowLayout.Main
					icon={<DoneIcon />}
					title="Auth-code verified."
					description="Confirm to start minting your Namefi NFT."
					steps={steps}
					onBack={onBack}
					className={className}>
					{!walletConnected && form}
					<ImportFlowLayout.Actions>
						{walletConnected ? (
							<ActionButton
								icon={<ArrowRightIcon className="w-5 h-5" />}
								className="mt-12"
								onClick={onClickImportDomain}>
								Confirm to Import
							</ActionButton>
						) : (
							<div>
								<div className="text-xs text-error tracking-widest mb-2">
									Please connect your wallet for import destination.
								</div>
								<ActionButton
									icon={<ArrowRightIcon className="w-5 h-5" />}
									onClick={onClickConnectWallet}>
									Connect Wallet
								</ActionButton>
							</div>
						)}
					</ImportFlowLayout.Actions>
				</ImportFlowLayout.Main>
			);
		}
		default:
			return null;
	}
};
