import React from 'react';
import { ImportFlowLayout } from '../components/ImportFlowLayout';
import { Steps } from '../components/Steps';
import { ActionButton } from '../components/ActionButton';
import YellowCatPNG from  '../../../assets/yellow-cat.png'

export type WaitRegistrarStepStatus = 'FIRST_TIME' | 'RECHECK';

export interface WaitRegistrarStepProps {
	status: WaitRegistrarStepStatus;
	onClickImportAnother?: () => void;
	onBack?: () => void;
	className?: string;
}

export const WaitRegistrarStep = ({
	status,
	onClickImportAnother,
	onBack,
	className,
}: WaitRegistrarStepProps) => {
	const steps = (
		<Steps
			items={[
				'Unlock',
				'Code Verified',
				'Mint Namefi NFT',
				'Successfully Imported',
			]}
			current={2.5}
			itemClassName="min-w-32"
			className="mb-12"
		/>
	);
	switch (status) {
		case 'FIRST_TIME': {
			return (
				<ImportFlowLayout.Main
					title="🍵 You're all set for now. "
					description="You can now close off and check back later."
					illustration={<img src={YellowCatPNG} className="ml-5" />}
					steps={steps}
					actions={
						<ActionButton className="w-auto mt-6" onClick={onClickImportAnother}>
							Import another one
						</ActionButton>
					}
					onBack={onBack}
					className={className}
				/>
			);
		}
		case 'RECHECK': {
			return (
				<ImportFlowLayout.Main
					title="Waiting on your registrar."
					description="Minting will automatically start when your domain is released."
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
						description="It takes from few mins up to 7 days, contact your registrar to speed things up."
            className="mt-6 mb-14"
					/>
				</ImportFlowLayout.Main>
			);
		}
		default:
			return null;
	}
};
