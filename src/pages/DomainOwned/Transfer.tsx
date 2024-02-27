import React, { useMemo } from 'react';
import { WalletInput } from './WalletInput';
import { ProgressBar } from './ProgressBar';
import { Button } from '../../components/Buttons/Button';
import clsx from 'clsx';
import { StepDiagram } from '../../components/StepDiagram';
import  ShortAddress  from '../../components/ShortAddress';
import { NamefiBrandText } from '../../components/NamefiBrandText';
import {ButtonText} from "../../components/Buttons/ButtonText";

export type TransferProps = {
	unlocked?: boolean;
	isTransferring?: boolean;
	progressWidth: number;
	domainName?: string;
	isTransferFinished?: boolean;
	onTransferClicked?: () => {};
	onUnlockClick?: () => {};

	receiverAddress?: string;
	onReceiverAddressChange?: () => {};
	receiverEnsName?: string;
	receiverEnsAvatar?: string;

	txLink?: string;
	nftLinks?: {
		openSea?: string;
		etherScan?: string;
		blockScout?: string;
		blur_io?: string;
		x2y2?: string;
		looksRare?: string;
	};
};

export const Transfer = ({
	unlocked,
	progressWidth, 
	domainName,
	onUnlockClick,
	onTransferClicked,
	receiverAddress,
	...props
}: TransferProps) => {
	const isTransferring = useMemo(
		() => unlocked && props.isTransferring && !props.isTransferFinished,
		[unlocked, props.isTransferring, props.isTransferFinished],
	);
	const isTransferFinished = useMemo(
		() => unlocked && props.isTransferFinished,
		[unlocked, props.isTransferFinished],
	);

	const transferNotInitiated = useMemo(
		() => !isTransferFinished && !isTransferring,
		[isTransferFinished, isTransferring],
	);

	return (
		<div
			className="relative w-[434px] h-[350px] px-0 flex flex-col justify-evenly "
			style={{ justifyContent: unlocked ? 'space-between' : 'space-evenly' }}>
			<div className="w-full h-[59px] flex flex-col justify-between ">
				<h4 className="font-semibold text-[21px] tracking-[0.05em] text-[#d9d9d9] ">
					{transferNotInitiated && 'Transfer domain to another wallet.'}
					{isTransferring && <>Transferring your <NamefiBrandText text={domainName} fontSize={'21px'} color={"d9d9d9"} /> NFT.</>}
					{isTransferFinished && 'Congratulations!'}
				</h4>
				<p className="font-normal text-sm tracking-[0.04em] text-[#C6EEDB] ">
					{!unlocked && 'Unlock your NFT Lock for Transfer.'}
					{transferNotInitiated && 'NFT unlocked, ready for Transfer!'}
					{isTransferring &&
						'Take a ☕, your domain will arrive in the destinated wallet soon.'}
					{isTransferFinished && (
						<>
							Your domain is now with the wallet{' '}
							<ShortAddress address={receiverAddress} />{' '}
						</>
					)}
				</p>
			</div>

			{unlocked && transferNotInitiated && <WalletInput inputValue={receiverAddress} />}
			{(isTransferring || isTransferFinished) && (
				<ProgressBar
					isLoading={isTransferring }
					progressWidth={isTransferFinished ? 100 : progressWidth}
					domainName={domainName}
				/>
			)}

			<div className="w-[434px] h-[96.5px] flex flex-col items-center justify-between ">
				<StepDiagram stepCount={2} currentStep={unlocked ? 2 : 1} />

				<div className="relative w-full h-12 flex justify-center gap-12 ">
					<Button
						disabled={unlocked}
						onClick={onUnlockClick}
						borderWidth="1px">
						<ButtonText>Unlock</ButtonText>
						<img
							className="w-[21px]"
							src={unlocked ? '/assets/Done.svg' : '/assets/Unlock.svg'}
							role="img" />
					</Button>

					<Button
						disabled={!unlocked}
						onClick={onTransferClicked}
						borderWidth="1px">
						<ButtonText>
						{isTransferFinished
							? 'Done'
							: isTransferring
							? 'Transferring...'
							: 'Transfer'}
						</ButtonText>
							<img
								alt={'transfer-status'}
								className={clsx('w-5', isTransferring && 'animate-spin')}
								src={
									isTransferFinished
										? '/assets/Done.svg'
										: isTransferring
										? '/assets/Update.svg'
										: '/assets/transfer.svg'
								}
							/>
					</Button>
				</div>
			</div>
		</div>
	);
};
