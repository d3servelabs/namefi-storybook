import React from 'react';
import { ImportFlowLayout } from '../components/ImportFlowLayout';
import {Steps} from "../../DomainOwned/components/Steps";
import { ActionButton } from '../components/ActionButton';
import NamefiBrandText from "../../../Core/NamefiBrandText";

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
			onBack={onBack}
			className={className}>
			<ImportFlowLayout.Progress
				progress={50}
				description={progressDescription}
				href={progressURL}
				className="mt-6 mb-14"
			/>
			<ImportFlowLayout.Actions>
				<ActionButton onClick={onClickImportAnother}>
					Import another one
				</ActionButton>
			</ImportFlowLayout.Actions>
		</ImportFlowLayout.Main>
	);
};
