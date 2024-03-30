import React from 'react';
import { ImportFlowLayout } from '../components/ImportFlowLayout';
import { Steps } from '../components/Steps';
import { ActionButton } from '../components/ActionButton';

export interface CompletedProps {
	domain: string;
	progressDescription?: React.ReactNode;
	progressHref?: string;
	onClickViewDomain?: () => void;
	className?: string;
}

export const Completed = ({
	domain,
	progressDescription,
	progressHref,
	onClickViewDomain,
	className,
}: CompletedProps) => {
	const steps = (
		<Steps
			items={[
				<div className="text-xs text-grey tracking-wide">Unlock</div>,
				<div className="text-xs text-grey tracking-wide">Code Verified</div>,
				<div className="text-xs text-grey tracking-wide">Mint Namefi NFT</div>,
				<div className="text-xs text-white tracking-wide font-medium">
					Successfully Imported
				</div>,
			]}
			current={2}
			className="mb-12"
		/>
	);
	return (
		<ImportFlowLayout.Main
			title={`Congratulations! You just imported ${domain}.`}
			description="Now you can trade and manage the domain with us."
			steps={steps}
			actions={
				<ActionButton className="w-auto" onClick={onClickViewDomain}>
					Go to domain
				</ActionButton>
			}
			className={className}>
			<ImportFlowLayout.Progress
				progress={100}
				description={progressDescription}
				href={progressHref}
				className="mt-6 mb-9"
			/>
		</ImportFlowLayout.Main>
	);
};
