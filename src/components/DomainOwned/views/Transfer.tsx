import React, { useState, useCallback } from 'react';
import { NamefiBrandText } from '../../../components';
import { UnlockIcon } from '../../../components/Core/icons/Unlock';
import { ReverseLeftIcon } from '../../../components/Core/icons/ReverseLeft';
import { DoneIcon } from '../../../components/Core/icons/Done';
import { ReverseRightIcon } from '../../../components/Core/icons/ReverseRight';
import { DomainOwnedLayout } from '../components/DomainOwnedLayout';
import { type LinkChipProps } from '../components/LinkChip';
import { StepButton } from '../components/StepButton';
import { Steps } from '../components/Steps';
import { WalletInput } from '../components/WalletInput';

export type TransferStatus = 'START' | 'UNLOCKED' | 'TRANSFERRING' | 'TRANSFERRED' | 'DONE';

export interface TransferProps {
	status: TransferStatus;
	domain?: string;
	receiverAddress?: string;
	transactionLink?: string;
	viewLinks?: LinkChipProps[];
	onClickUnlock?: () => void;
	onClickTransfer?: (form: { recipient: string }) => void;
	onClickDone?: () => void;
	className?: string;
}

export const Transfer = ({
	status,
	domain,
	receiverAddress,
	transactionLink,
	viewLinks,
	onClickUnlock,
	onClickTransfer,
	onClickDone,
	className,
}: TransferProps) => {
	const [recipient, setRecipient] = useState('');
	const handleClickTransfer = useCallback(
		() => onClickTransfer?.({ recipient }),
		[recipient, onClickTransfer],
	);

	switch (status) {
		case 'START': {
			return (
				<DomainOwnedLayout.Main
					icon={<ReverseRightIcon />}
					title="Transfer domain to another wallet."
					description="Unlock your NFT Lock for Transfer."
					className={className}>
					<Steps
						current={0}
						items={[
							<StepButton icon={<UnlockIcon />} onClick={onClickUnlock}>
								Unlock
							</StepButton>,
							<StepButton icon={<ReverseLeftIcon />} disabled>
								Transfer
							</StepButton>,
						]}
					/>
				</DomainOwnedLayout.Main>
			);
		}
		case 'UNLOCKED': {
			return (
				<DomainOwnedLayout.Main
					icon={<ReverseRightIcon />}
					title="Transfer domain to another wallet."
					description="NFT unlocked, ready for Transfer!"
					className={className}>
					<div className="mb-12">
						<div className="text-sm text-black-500 mb-3">Recipient Wallet</div>
						<WalletInput
							value={recipient}
							onChange={setRecipient}
							placeholder="Paste wallet or ENS address"
						/>
					</div>
					<Steps
						current={1}
						items={[
							<StepButton icon={<UnlockIcon />} disabled>
								Unlock
							</StepButton>,
							<StepButton icon={<ReverseLeftIcon />} onClick={handleClickTransfer}>
								Transfer
							</StepButton>,
						]}
					/>
				</DomainOwnedLayout.Main>
			);
		}
		case 'TRANSFERRING': {
			return (
				<DomainOwnedLayout.Main
					icon={<ReverseRightIcon />}
					title={
						<div>
							Transferring your <NamefiBrandText>Namefi</NamefiBrandText> NFT.
						</div>
					}
					description="Take a ☕, your domain will arrive in the destinated wallet soon."
					className={className}>
					<DomainOwnedLayout.Progress
						progress={50}
						description={`We're working on transferring ${domain}.`}
						href={transactionLink}
					/>
					<Steps
						current={1}
						items={[
							<StepButton icon={<UnlockIcon />} disabled>
								Unlock
							</StepButton>,
							<StepButton icon={<ReverseLeftIcon />} loading>
								Transferring...
							</StepButton>,
						]}
					/>
				</DomainOwnedLayout.Main>
			);
		}
		case 'TRANSFERRED': {
			return (
				<DomainOwnedLayout.Main
					icon={<DoneIcon />}
					title="Congratulations!"
					description={`Your domain is now with wallet ending in ${receiverAddress?.slice(
						-4,
					)}.`}
					className={className}>
					<DomainOwnedLayout.Progress
						progress={100}
						description={`${domain} transfer completed.`}
						href={transactionLink}
					/>
					<Steps
						current={1}
						items={[
							<StepButton icon={<UnlockIcon />} disabled>
								Unlock
							</StepButton>,
							<StepButton icon={<DoneIcon />} onClick={onClickDone}>
								Done
							</StepButton>,
						]}
					/>
				</DomainOwnedLayout.Main>
			);
		}
		case 'DONE': {
			return (
				<DomainOwnedLayout.Main
					icon={<DoneIcon />}
					title="Congratulations!"
					description={`Your domain is now with wallet ending in ${receiverAddress?.slice(
						-4,
					)}.`}
					className={className}>
					<DomainOwnedLayout.Progress
						progress={100}
						description={`${domain} transfer completed.`}
						href={transactionLink}
					/>
					<DomainOwnedLayout.Links title="View on" links={viewLinks} />
				</DomainOwnedLayout.Main>
			);
		}
		default: {
			return null;
		}
	}
};
