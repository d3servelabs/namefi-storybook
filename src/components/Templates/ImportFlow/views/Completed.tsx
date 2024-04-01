import React, { useCallback } from 'react';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { ImportFlowLayout } from '../components/ImportFlowLayout';
import {Steps} from "../../DomainOwned/components/Steps";
import { ActionButton } from '../components/ActionButton';

export interface CompletedProps {
	domain: string;
	progressDescription?: React.ReactNode;
	progressURL?: string;
	onClickViewDomain?: (domain: string) => void;
	onBack?: () => void;
	className?: string;
}

export const Completed = ({
	domain,
	progressDescription,
	progressURL,
	onClickViewDomain,
	onBack,
	className,
}: CompletedProps) => {
	const steps = (
		<Steps
			items={['Unlock', 'Code Verified', 'Mint Namefi NFT', 'Successfully Imported']}
			current={3}
			itemClassName="min-w-32"
			className="mb-12"
		/>
	);
	const handleClickViewDomain = useCallback(() => {
		onClickViewDomain?.(domain);
	}, [domain]);
	return (
		<ImportFlowLayout.Main
			title={`Congratulations! You just imported ${domain}.`}
			description="Now you can trade and manage the domain with us."
			steps={steps}
			onBack={onBack}
			className={className}>
			<ImportFlowLayout.Progress
				progress={100}
				description={progressDescription}
				href={progressURL}
				className="mt-6 mb-9"
			/>
			<ImportFlowLayout.Actions>
				<ActionButton
					icon={<ArrowRightIcon />}
					onClick={handleClickViewDomain}>
					Go to domain
				</ActionButton>
			</ImportFlowLayout.Actions>
		</ImportFlowLayout.Main>
	);
};
