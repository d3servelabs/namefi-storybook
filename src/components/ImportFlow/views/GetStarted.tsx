import React from 'react';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { TokenIcon } from '../../../components';
import { NamefiBrandText } from '../../../components';
import { Balance } from '../../../components/Core/Balance';
import { ImportFlowLayout } from '../components/ImportFlowLayout';
import { ActionButton } from '../components/ActionButton';

export interface Option {
	label: string;
	value: string;
}

export interface GetStartedProps {
	costValue: number;
	costExchangeRate?: number;
	networkOptions?: Option[];
	onClickStart?: () => void;
	className?: string;
}

export const GetStarted = ({ costValue, costExchangeRate = 1, networkOptions, onClickStart, className }: GetStartedProps) => {
	return (
		<ImportFlowLayout.Main
			title={
				<>
					Import it to your wallet, on <NamefiBrandText>Namefi</NamefiBrandText>.
				</>
			}
			description="Mint your domain NFT and start trading it hassle-free."
			actions={
				<ActionButton icon={<ArrowRightIcon />} className="w-auto" onClick={onClickStart}>
					Start Import
				</ActionButton>
			}
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
						Select Network
					</ImportFlowLayout.Field>
				)}
			</div>
		</ImportFlowLayout.Main>
	);
};
