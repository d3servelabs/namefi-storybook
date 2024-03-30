import React from 'react';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { RefreshIcon } from '../../../components/Core/icons/Refresh';
import { UnlockIcon } from '../../../components/Core/icons/Unlock';
import { ImportFlowLayout } from '../components/ImportFlowLayout';
import { Steps } from '../components/Steps';
import { ActionButton } from '../components/ActionButton';
import { Spinner } from '../components/Spinner';

export type UnlockStepStatus = 'DEFAULT' | 'LOADING' | 'LOCKED' | 'UNLOCKED';

export interface UnlockStepProps {
	status: UnlockStepStatus;
	onClickVerify?: () => void;
	onClickNext?: () => void;
	onBack?: () => void;
	className?: string;
}

export const UnlockStep = ({ status, onClickVerify, onClickNext, onBack, className }: UnlockStepProps) => {
	const steps = (
		<Steps
			items={[
				<div className="text-xs text-white tracking-wide font-medium">
					Unlock from Source
				</div>,
				<div className="text-xs text-grey tracking-wide">Auth-Code</div>,
				<div className="text-xs text-grey tracking-wide">Mint Namefi NFT</div>,
				<div className="text-xs text-grey tracking-wide">Successfully Imported</div>,
			]}
			current={0}
			className="mb-12"
		/>
	);
	switch (status) {
		case 'DEFAULT': {
			return (
				<ImportFlowLayout.Main
					title="Go to your domain's current registrar."
					description="Unlock it and verify its status."
					steps={steps}
					actions={
							<ActionButton
								icon={<RefreshIcon />}
								className="w-auto mt-16"
								onClick={onClickVerify}>
								Verify Unlock
							</ActionButton>
					}
					onBack={onBack}
					className={className}
				/>
			);
		}
		case 'LOADING': {
			return (
				<ImportFlowLayout.Main
					title="Verifying unlock..."
					description="Give us just a few seconds."
					steps={steps}
					onBack={onBack}
					className={className}>
					<Spinner />
				</ImportFlowLayout.Main>
			);
		}
		case 'LOCKED': {
			return (
				<ImportFlowLayout.Main
					icon={<UnlockIcon />}
					title="Domain is still locked."
					description="Refresh to verify again."
					steps={steps}
					actions={
						<ActionButton
							icon={<RefreshIcon />}
							className="w-auto mt-12"
							onClick={onClickVerify}>
							Verify Again
						</ActionButton>
					}
					onBack={onBack}
					className={className}
				/>
			);
		}
		case 'UNLOCKED': {
			return (
				<ImportFlowLayout.Main
					icon={<UnlockIcon />}
					title="Domain is unlocked."
					description="Verified Successful."
					steps={steps}
					actions={
						<ActionButton
							icon={<ArrowRightIcon />}
							className="w-auto mt-12"
							onClick={onClickNext}>
							Next
						</ActionButton>
					}
					onBack={onBack}
					className={className}
				/>
			);
		}
		default:
			return null;
	}
};
