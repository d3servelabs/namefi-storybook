import React from 'react';
import { NamefiBrandText } from '../../../components';
import { ImportFlowLayout } from '../components/ImportFlowLayout';
import { Steps } from '../components/Steps';
import { ActionButton } from '../components/ActionButton';

export interface MintStepProps {
	icon?: React.ReactNode;
	progressDescription?: React.ReactNode;
	progressURL?: string;
	onClickImportAnother?: () => void;
	onBack?: () => void;
	className?: string;
}

export const MintStep = ({
	icon,
	progressDescription,
	progressURL,
	onClickImportAnother,
	onBack,
	className,
}: MintStepProps) => {
	const steps = (
		<Steps
			items={['Unlock', 'Code Verified', 'Mint Namefi NFT', 'Successfully Imported']}
			current={2}
			itemClassName="min-w-32"
			className="mb-12"
		/>
	);
	return (
		<ImportFlowLayout.Main
			title={
				<>
					Minting your <NamefiBrandText>Namefi</NamefiBrandText> NFT.
				</>
			}
			description="Your domain is released."
			icon={icon}
			steps={steps}
			actions={
				<ActionButton className="w-auto" onClick={onClickImportAnother}>
					Import another one
				</ActionButton>
			}
			onBack={onBack}
			className={className}>
			<ImportFlowLayout.Progress
				progress={50}
				description={progressDescription}
				href={progressURL}
				className="mt-6 mb-14"
			/>
		</ImportFlowLayout.Main>
	);
};
