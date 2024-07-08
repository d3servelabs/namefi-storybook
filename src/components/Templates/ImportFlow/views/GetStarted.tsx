import React from 'react';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { Balance } from '../../../Core/Balance';
import { ImportFlowLayout } from '../components/ImportFlowLayout';
import { ActionButton } from '../components/ActionButton';
import { type NetworkOption, NetworkSelect } from '../components/NetworkSelect';
import NamefiBrandText from '../../../Core/NamefiBrandText';
import TokenIcon from '../../../Core/icons/TokenIcon';

export type { NetworkOption };

export interface GetStartedProps {
	costValue: number;
	costExchangeRate?: number;
	network?: string;
	networkOptions?: NetworkOption[];
	onChangeNetwork?: (network: string) => void;
	onClickStart?: () => void;
	onBack?: () => void;
	className?: string;
}

export const GetStarted = ({
	costValue,
	costExchangeRate = 1,
	network,
	networkOptions,
	onChangeNetwork,
	onClickStart,
	onBack,
	className,
}: GetStartedProps) => {
	return (
		<ImportFlowLayout.Main
			title={
				<>
					Import it to your wallet, on <NamefiBrandText>Namefi</NamefiBrandText>.
				</>
			}
			description="Mint your domain NFT and start trading it hassle-free."
			onBack={onBack}
			className={className}>
			<div className="mt-6 mb-12">
				<ImportFlowLayout.Field
					label="Import costs"
					tooltip="You must renew the domain for a year when import.">
					<div className="flex items-center">
						<TokenIcon className="w-10 pr-3" />
						<Balance balance={costValue} />
						<span className="text-xs font-primary text-grey-lighter ml-1">
							(≈${(costValue * costExchangeRate).toFixed(2)})
						</span>
					</div>
				</ImportFlowLayout.Field>
				{!!networkOptions?.length && (
					<ImportFlowLayout.Field label="I'd like to import to">
						<NetworkSelect
							value={network}
							onChange={onChangeNetwork}
							options={networkOptions}
						/>
					</ImportFlowLayout.Field>
				)}
			</div>
			<ImportFlowLayout.Actions>
				<ActionButton
					icon={<ArrowRightIcon />}
					className="w-auto"
					onClick={onClickStart}
					disabled={!!networkOptions?.length && !network}>
					Start Import
				</ActionButton>
			</ImportFlowLayout.Actions>
		</ImportFlowLayout.Main>
	);
};
