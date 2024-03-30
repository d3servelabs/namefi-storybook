import React from 'react';
import { NamefiBrandText } from '../../../components';
import { ImportFlowLayout } from '../components/ImportFlowLayout';
import { Steps } from '../components/Steps';
import { ActionButton } from '../components/ActionButton';

export interface MintStepProps {
	networkIcon?: React.ReactNode;
	progressDescription?: React.ReactNode;
	progressHref?: string;
	onClickImportAnother?: () => void;
	className?: string;
}

export const MintStep = ({
	networkIcon,
	progressDescription,
	progressHref,
	onClickImportAnother,
	className,
}: MintStepProps) => {
	const steps = (
		<Steps
			items={[
				<div className="text-xs text-grey tracking-wide">Unlock</div>,
				<div className="text-xs text-grey tracking-wide">Code Verified</div>,
				<div className="text-xs text-white tracking-wide font-medium">Mint Namefi NFT</div>,
				<div className="text-xs text-grey tracking-wide">Successfully Imported</div>,
			]}
			current={2}
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
			icon={networkIcon}
			steps={steps}
			actions={
				<ActionButton className="w-auto" onClick={onClickImportAnother}>
					Import another one
				</ActionButton>
			}
			className={className}>
			<ImportFlowLayout.Progress
				progress={50}
				description={progressDescription}
				href={progressHref}
				className="mt-6 mb-14"
			/>
		</ImportFlowLayout.Main>
	);
};
