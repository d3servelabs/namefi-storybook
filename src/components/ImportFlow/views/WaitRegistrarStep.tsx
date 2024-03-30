import React from 'react';
import { ImportFlowLayout } from '../components/ImportFlowLayout';
import { Steps } from '../components/Steps';
import { ActionButton } from '../components/ActionButton';
import YellowCatPNG from  '../../../assets/yellow-cat.png'

export type WaitRegistrarStepStatus = 'FIRST_TIME' | 'RECHECK';

export interface WaitRegistrarStepProps {
	status: WaitRegistrarStepStatus;
	onClickImportAnother?: () => void;
	className?: string;
}

export const WaitRegistrarStep = ({
	status,
	onClickImportAnother,
	className,
}: WaitRegistrarStepProps) => {
	const steps = (
		<Steps
			items={[
				<div className="text-xs text-grey tracking-wide">Unlock</div>,
				<div className="text-xs text-grey tracking-wide">Code Verified</div>,
				<div className="text-xs text-grey tracking-wide">Mint Namefi NFT</div>,
				<div className="text-xs text-grey tracking-wide">Successfully Imported</div>,
			]}
			current={-1}
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
