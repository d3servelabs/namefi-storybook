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

export const UnlockStep = ({
	status,
	onClickVerify,
	onClickNext,
	onBack,
	className,
}: UnlockStepProps) => {
	const steps = (
		<Steps
			items={['Unlock from Source', 'Auth-Code', 'Mint Namefi NFT', 'Successfully Imported']}
			current={0}
			itemClassName="min-w-32"
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
					onBack={onBack}
					className={className}>
					<ImportFlowLayout.Actions>
						<ActionButton
							icon={<RefreshIcon />}
							className="mt-16"
							onClick={onClickVerify}>
							Verify Unlock
						</ActionButton>
					</ImportFlowLayout.Actions>
				</ImportFlowLayout.Main>
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
					onBack={onBack}
					className={className}>
					<ImportFlowLayout.Actions>
						<ActionButton
							icon={<RefreshIcon />}
							className="mt-12"
							onClick={onClickVerify}>
							Verify Again
						</ActionButton>
					</ImportFlowLayout.Actions>
				</ImportFlowLayout.Main>
			);
		}
		case 'UNLOCKED': {
			return (
				<ImportFlowLayout.Main
					icon={<UnlockIcon />}
					title="Domain is unlocked."
					description="Verified Successful."
					steps={steps}
					onBack={onBack}
					className={className}>
					<ImportFlowLayout.Actions>
						<ActionButton
							icon={<ArrowRightIcon />}
							className="mt-12"
							onClick={onClickNext}>
							Next
						</ActionButton>
					</ImportFlowLayout.Actions>
				</ImportFlowLayout.Main>
			);
		}
		default:
			return null;
	}
};
